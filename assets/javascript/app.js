//This keeps track of the scores
let correct = 0;
let incorrect = 0;
let unanswered = 0;
let choice;
let countStartNumber = 0;

//Questions Array
var questions = [{
  q: "How many seasons are there?",
  answer: ['2', '3', '4', '5'],
  correct: "4",
  
}, {
  q: "Which is the best Aquarium in the world?",
  answer: ['Tennessee', 'Orlando', 'Atlanta', 'San Diego'],
  correct: "Atlanta",
  
}, {
  q: "Who is the fastest man in the world?",
  answer: ['Jesse owens', 'Michael Johnson', 'Carl Lewis', 'Usain Bolt'],
  correct: "Usain Bolt",
  
}];

//Starts the game
function newGame() {

  alert("You will have 30 seconds for each question. \n You can now begin the game");
  $(".timer").append("<b>Timer: 00:00</b>");

  for (var i = 0; i < questions.length; i++) {
     timer = setInterval(game.countdown, 1000);
     $(".timer").append(timer);
     console.log(questions[i].q);
     $(".question").html('<h2>' + questions[i].q + '</h2>' );
     $(".answer").html('<form><p><input type="radio" id="myRadio" value="'+questions[i].answer[0]+'">  ' + questions[i].answer[0] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[1]+'">  ' + questions[i].answer[1] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[2]+'">  ' + questions[i].answer[2] + '</p>'
     + '<p><input type="radio" id="myRadio" value="'+questions[i].answer[3]+'">  ' + questions[i].answer[3] + '</p>');
     var x = document.getElementById("myRadio").value;
     document.getElementById("demo").innerHTML = x;




// console.log(questions[i].q);
// console.log(questions[i].answer);
// console.log(questions[i].correct);
      //If correct answer
      //Get click event
      //add 1 to correct counter
      //show correct answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If wrong answer
      //Get click event
      //add 1 to incorrect counter
      //show incorrect answer message
      //Give 5 seconds before moving to next question
      //If last question, go to final message
      //If unanswered
      //Get click event
      //add 1 to unanswered counter
      //show unanswered answer message
      //Give 5 seconds before moving to next question
      //If last question go to final message		

    if (questions[i].correct === choice) {
      correct++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else if (choice === null) {
      unanswered++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    } else {
      incorrect++;
      console.log("Correct: " + correct + " | Incorrect: " + incorrect + " | Unanswered: " + unanswered);
    }
  }
}
 //end newGame function

$('.start').click(newGame);

// 	//Button that starts the game
// 	// question appears
$(".question").each(function(index, questions) {

  for (var i = 0; i < questions.length; i++) {
    questions[i]
    console.log(questions[i]);
  }

  $(".questions").show("complete");
  console.log('Wow');
});


//need to show answers

var game = {
    questions: questions,
    currentQuestion: questions[0],
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,
    countdown: function() {
      game.counter--;
      $('#counter-number').html(game.counter);

      if (game.counter === 0) {
        console.log('TIME UP');
        game.timeUp();
      }
    
  },
  //timer needs to start
  // timer counts down from 30sec
   loadQuestion: function(){
     timer = setInterval(game.countdown, 1000);
     var panel = document.getElementByClassName('Timer');
     console.log(panel);
     panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
     for (var i = 0; i<questions[this.currentQuestion].answers.length; i++){
       panel.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
     }
     }
     }//,
  //  timeUp: function (){
  //    clearInterval(timer);
  //    $('#counter-number').html(game.counter);

  //    panel.html('<h2>Out of Time!</h2>');
  //    panel.append('<h3>The Correct Answer was: ' + questions[this.currentQuestion].correctAnswer);
  //    panel.append('<img src="' + questions[this.currentQuestion].image + '" />');

  //    if (game.currentQuestion === questions.length - 1){
  //      setTimeout(game.results, 3 * 1000);
  //    } else {
  //      setTimeout(game.nextQuestion, 3 * 1000);
  //    }
  //  }



  //After last question, 
  //show counter message
  //reset button underneath
  // function end() {
  //   $('.score').append("<div>Correct Answers: " + correct + "\n");
  //   $('.score').append("<div>Incorrect Answers: " + incorrect + "\n");
  //   $('.score').append("<div>Timed out: " + unanswered + "\n");
  // };

function reset() {
  //TODO - Make a clear all divs 
  $(".question").html("<div></div>");
  $(".answer").html("<div></div>");
  $(".score").html("<div></div>");
  $(".timer").html("<div></div>");
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;
  //	$(correct, incorrect, unanswered) = 0;
  console.log("score: " + correct + incorrect + unanswered);
};
$('.resetbtn').click(reset);