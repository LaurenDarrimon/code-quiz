

//use object notation to create over-arching code quiz object
let codeQuiz = {

    //create nested array object that will hold question and answer sets. 
    questionsAndAnswers : [
        {
            question: "Commonly used data types do NOT include ___________. ",
            options:["strings", "alerts", "booleans", "numbers"],
            rightAnswer: 2
        }, 
        {
            question: "The condition for an if/else statement is enclosed within ___________. ",
            options:["parentheses", "curly brackets", "square brackets", "single quotes"],
            rightAnswer: 0
        }, 
        {
            question: "Arrays in Javascript can be used to store ________. ",
            options:["numbers and strings", "booleans", "other arrays", "all of the above"],
            rightAnswer: 3
        }, 
        {
            question: "What are the first two words programmers learn to code?",
            options:["Ha ha!", "Hello, Friend!", "Hello, World!", "The Force"],
            rightAnswer: 2
        }, 
        {
            question: "String values must be enclosed within __________ ?",
            options:[" parentheses", " sqaure brackets  ", "  curly brackets  ", " quotation marks  "],
            rightAnswer: 3
        }, 
    ],
};
        

    //initialize variables needed globally
    let timer = 100;
    let questionNumber  = 1;
    let score = 0;

    //declare overarching function that will contain smaller nested functions that are each part of gameplay
    function playGame(){
        console.log("play game");

        //DISPLAY THE QUESTION
        // find and display question number 
        document.getElementById("question-number").innerHTML =  questionNumber;
        //point to the question feild
        let questionField = document.getElementById("question-field");
        questionField.innerHTML = codeQuiz.questionsAndAnswers[questionNumber - 1].question;

        //DISPLAY ANSWER BUTTONS
        var answerSection = document.getElementById("answer-section"); //find the answer button section
        answerSection.innerHTML = ""; //clear the old stuff

        // a little loop that will append a button for each possible answer option in the array
        for (let i = 0; i < codeQuiz.questionsAndAnswers.length - 1; i++ ){
            console.log(codeQuiz.questionsAndAnswers[questionNumber-1].options[i]);

            let answerButton = document.createElement("BUTTON");   
            answerButton.innerHTML = codeQuiz.questionsAndAnswers[questionNumber-1].options[i];                   
            answerSection.appendChild(answerButton);

            answerButton.addEventListener("click", checkAnswer);
        };
    } 


    function checkAnswer(choice){
        console.log("check answer");

       


    };

    function updateScore() {
        console.log("update score" );

    };



//when the page loads ask the user if they'd like to play the game. When they say yes, then run the code quiz. 

//point to the id tag "start" (the button)
let startGameButton = document.querySelector("#start");


//when start button is clicked, the code to play the game will run
startGameButton.addEventListener("click", playGame);

