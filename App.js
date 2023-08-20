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
    new Question("Which is the most widely spoken language in the world?", ["Spanish", "Mandarin", "English", "German"],"Mandarin")

  
  ];


  //Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
      document.getElementsByClassName("container-mid")[questionCount];
    let options = question-div.querySelectorAll(".option-div");
  
    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
      userOption.classList.add("correct");
      scoreCount++;
    } else {
      userOption.classList.add("incorrect");
      //For marking the correct option
      options.forEach((element) => {
        if (element.innerText == quizArray[questionCount].correct) {
          element.classList.add("correct");
        }
      });
    }
  
    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
      element.disabled = true;
    });
  }

  var quiz = new Quiz(questions);

  populate();