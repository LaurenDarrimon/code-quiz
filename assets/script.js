

//use object notation to create over-arching code quiz object
let codeQuiz = {

    //create nested array object that will hold question and answer sets. 
    questionsAndAnswers : [
        {
            question: "",
            options:["a", "b", "c", "d"],
            rightAnswer: 1
        }, 
        {
            question: "",
            options:["a", "b", "c", "d"],
            rightAnswer: 1
        }, 
        {
            question: "",
            options:["a", "b", "c", "d"],
            rightAnswer: 1
        }, 
        {
            question: "",
            options:["a", "b", "c", "d"],
            rightAnswer: 1
        }, 
    ],
        

    //initialize variables needed globally
    timer: 100,
    questionNumber:0,
    score:0,

    //declare overarching function that will contain smaller nested functions that are each part of gameplay
    playGame: function(){
        console.log("play game");
        
    }, 


    //declare smaller nested functions
    displayQuestion: function(){
        console.log("display");
        

    }, 

    checkAnswer: function(){
        console.log("check answer");

    }, 

    updateScore: function(){
        console.log("update score" );

    }, 

};

//when the page loads ask the user if they'd like to play the game. When they say yes, then run the code quiz. 

//point to the id tag "start" (the button)
let startGameButton = document.querySelector("#start");


//when start button is clicked, the code to play the game will run
startGameButton.addEventListener("click", codeQuiz.playGame);

