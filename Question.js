function Question(text, choices, answer){
    this.text = text;
    this.choices;
    this.answer;

}

// function to verify answers
Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
}