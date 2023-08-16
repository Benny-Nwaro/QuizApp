function Quiz(question){
    this.score = 0;
    this.questions = question;
    this.questionIndex = 0;
}

// create function to get question index

Quiz.prototype.getQuestionIndex = function(){
    return this.question[this.questionIndex];
}

//create function to see if Quiz has ended

Quiz.prototype.isEnded = function() {
    return this.questions.length===this.questionIndex;
}

//function to check if answer is correct

Quiz.prototype.guess = function(answer){
    if(this.getQuestionIndex().correctAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}