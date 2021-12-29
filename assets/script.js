

//use object notation to create over-arching code quiz object
let codeQuiz = {

    //create nested array object that will hold question and answer sets. 
    questionsAndAnswers : [
        {
            question: "Commonly used data types do NOT include ___________. ",
            options:["strings", "alerts", "booleans", "numbers"],
            rightAnswer: "numbers",
        }, 
        {
            question: "The condition for an if/else statement is enclosed within ___________. ",
            options:["parentheses", "curly brackets", "square brackets", "single quotes"],
            rightAnswer: "parentheses",
        }, 
        {
            question: "Arrays in Javascript can be used to store ________. ",
            options:["numbers and strings", "booleans", "other arrays", "all of the above"],
            rightAnswer: "all of the above",
        }, 
        {
            question: "What are the first two words programmers learn to code?",
            options:["Ha ha!", "Hello, Friend!", "Hello, World!", "The Force"],
            rightAnswer: "Hello, World!",
        }, 
        {
            question: "String values must be enclosed within __________ ?",
            options:["parentheses", "sqaure brackets", "curly brackets", "quotation marks"],
            rightAnswer: "quotation marks",
        }, 
    ],
};
        
    //initialize variables needed globally
    let timer = 100;
    let questionNumber  = 1;
    let score = 0;
    let questionField = document.getElementById("question-field"); //point to the question feild
    let answerSection = document.getElementById("answer-section"); //point to the answer button section
    let answerButton = document.createElement("BUTTON");  

    //declare overarching function that will contain smaller nested functions that are each part of gameplay
    function playGame(){
        console.log("play game");

        //DISPLAY THE QUESTION
        // find and display question number 
        document.getElementById("question-number").innerHTML =  questionNumber;
      
        questionField.innerHTML = codeQuiz.questionsAndAnswers[questionNumber - 1].question;

        //DISPLAY ANSWER BUTTONS
        answerSection.innerHTML = ""; //clear the old stuff

        // a little loop that will append a button for each possible answer option in the array
        for (let i = 0; i < codeQuiz.questionsAndAnswers.length - 1; i++ ){
            console.log(codeQuiz.questionsAndAnswers[questionNumber-1].options[i]);
 
            let answerButton = document.createElement("BUTTON");  
            answerButton.innerHTML = codeQuiz.questionsAndAnswers[questionNumber-1].options[i];                   
            answerSection.appendChild(answerButton);

            //once the user clicks a answer button, call up the functino to check the answer
            answerButton.addEventListener("click", checkAnswer);
        };
    } 


    function checkAnswer(choice){
        console.log(choice);

        let noteSection = document.getElementById("note"); //find the answer button section
        let userChoice = choice.srcElement.innerHTML;

        //compare answer from codeQuiz object to the innerHTML of the inner HTML of the soucre element of the click event
        if (userChoice === codeQuiz.questionsAndAnswers[questionNumber-1].rightAnswer){
        
            //display confirmation message
            noteSection.innerHTML = "Yes! Your last answer was right! You've earned a point! "; 
            score++; //increment score. 

        } else {
            noteSection.innerHTML = "Sorry! your last answer was incorrect. You've lost time on the clock. "; 
        };

        updateScore();

    };

    function updateScore() {
        console.log("update score");


        //display score here. 

        nextQuestion();

    };

    function nextQuestion() {
        console.log("next question");

        //if there are still more questions, increment the question number, and run the whole thing through again.  
        if (questionNumber < codeQuiz.questionsAndAnswers.length){
            questionNumber++; 
            playGame();
            
        //if there are no more questions, prompt the user to play again
        } else{
            questionField.innerHTML = "Would you like to play again?"

            let answerButton = document.createElement("BUTTON");  
            answerButton.innerHTML = "Play Again!";
            answerSection.innerHTML = "";
            answerSection.appendChild(answerButton);

            //once the user clicks to play again, call up the functiion to play again! 
            answerButton.addEventListener("click", playGame);

        }


    };



//when the page loads ask the user if they'd like to play the game. When they say yes, then run the code quiz. 

//point to the id tag "start" (the button)
let startGameButton = document.querySelector("#start");


//when start button is clicked, the code to play the game will run
startGameButton.addEventListener("click", playGame);

