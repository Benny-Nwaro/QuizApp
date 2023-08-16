// function to populate questions

function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else {
        //show the questions
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++){
            var element = document.getElementById("choice"+ i);
            element.innerHTML = choices[i]; 
            guess("btn"+i, choices[i]);
        }
    }
};


// function to guess answer
function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

//function to show number of questions answered

function showProgress(){
    var currentQuestionNumber = quiz.questionIndex+1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
}

// function to display scores
function showScores(){
    var quizOverHtml = "<h1> Result </h1>";
    quizOverHtml += "<h2 id ='score'> your score:" +quiz.score + "<h2>";

    var element = document.getElementById("quiz");
    element.innerHTML = quizOverHtml;
}


//the array of questions
const questions = [
    {
      id: "0",
      question: "Which is the most widely spoken language in the world?",
      options: ["Spanish", "Mandarin", "English", "German"],
      correct: "Mandarin",
    },
    {
      id: "1",
      question: "Which is the only continent in the world without a desert?",
      options: ["North America", "Asia", "Africa", "Europe"],
      correct: "Europe",
    },
    {
      id: "2",
      question: "Who invented Computer?",
      options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
      correct: "Charles Babbage",
    },
  
  
  ];

  var quiz = new Quiz(questions);

  populate();