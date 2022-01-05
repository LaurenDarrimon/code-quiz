

//use object notation to create over-arching code quiz object
let codeQuiz = {

    //create nested array object that will hold question and answer sets. 
    questionsAndAnswers : [
        {
            question: "Commonly used data types do NOT include ___________. ",
            options:["strings", "alerts", "booleans", "numbers"],
            rightAnswer: "alerts",
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
            options:["parentheses", "square brackets", "curly brackets", "quotation marks"],
            rightAnswer: "quotation marks",
        }, 
    ],
};
        
    //initialize variables & counters needed globally
    let timer = 20; //starts the timer
    let questionNumber  = 1;
    let rightCount = 0;
    let wrongCount = 0;

    //DOM variables needed globally
    let questionField = document.getElementById("question-field"); //point to the question feild
    let answerSection = document.getElementById("answer-section"); //point to the answer button section
    let answerButton = document.createElement("BUTTON");  
    let countdown = document.getElementById("countdown");
    let timeMessage = document.getElementById("time-message");
    let rightDisplay = document.getElementById("right-display");
    let wrongDisplay = document.getElementById("wrong-display");

    //declare overarching function that will contain two parallel pathways to ending the game
    function playGame(){
        timer = 20;
        displayQuestions(); //game can end if the user works through all the questions
        startTimer(); //game can end if the timer runs out
    }

    //declare a function that will run a loop based on set time intervals instead of conditional statements
    function startTimer(){

        //interval function iterates every 1 second to decrease time remaining to make a countdown clock
        let timeRemaining = setInterval(function() {
            timer--; //decrement time 
            //countdown.textContent = timer; //display the time remaining. 
            timeMessage.innerHTML = "Seconds Remaining: " + timer ; 
            if(timer === 0) {  
                timer = 0;
                clearInterval(timeRemaining);
                // when time runs out, gameOver function is called, overwriting question diplays
                gameOver();
                timeMessage.textContent = "You ran out of time!"; //display timeout message
              } 
          }, 1000); // function runs once a second (1000 miliseconds)  
    };

    function displayQuestions(){

        //DISPLAY THE QUESTION
        // find and display question number 
        document.getElementById("question-number").innerHTML =  questionNumber;
        
        questionField.innerHTML = codeQuiz.questionsAndAnswers[questionNumber - 1].question;

        //DISPLAY ANSWER BUTTONS
        answerSection.innerHTML = ""; //clear the old stuff

        // a little loop that will append a button for each possible answer option in the array
        for (let i = 0; i < codeQuiz.questionsAndAnswers.length - 1; i++ ){
            //console.log(codeQuiz.questionsAndAnswers[questionNumber-1].options[i]);

            let answerButton = document.createElement("BUTTON");  
            answerButton.innerHTML = codeQuiz.questionsAndAnswers[questionNumber-1].options[i];                   
            answerSection.appendChild(answerButton);

            //once the user clicks a answer button, call up the function to check the answer
            answerButton.addEventListener("click", checkAnswer);
        };
    } 


    function checkAnswer(choice){
        console.log(choice);
        let noteSection = document.getElementById("note"); //find the answer button section
        let userChoice = choice.srcElement.innerHTML;

        //compare answer from codeQuiz object to the innerHTML of the soucre element from the click event that triggered the function
        if (userChoice === codeQuiz.questionsAndAnswers[questionNumber-1].rightAnswer){ //WIN 
            //display confirmation message
            noteSection.innerHTML = "Yes! Your last answer was right! You've earned a point! "; 
            rightCount++; //increment wins score. 
        } else { //LOSS
            noteSection.innerHTML = "Sorry! your last answer was incorrect. You've lost time on the clock. "; 
            timer = timer-5; //take 5 seconds off the clock
            wrongCount++; //increment wins score. 
        };

        displayScore(); 

    };

    function displayScore() {
        rightDisplay.textContent = "# Right: " + rightCount;  
        wrongDisplay.textContent = "# Wrong: " + wrongCount;


        nextQuestion();

    };

    function nextQuestion() {
        //if there are still more questions, increment the question number, and run the whole thing through again.  
        if (questionNumber < codeQuiz.questionsAndAnswers.length){
            questionNumber++;   //increase the question number
            displayQuestions(); //run through display questins function again, at next index position
        } else{  //if there are no more questions, prompt the user to play again
            gameOver();
        }
    };

    function gameOver(){
        answerSection.innerHTML = "";
        document.getElementById("question-number").innerHTML =  ""; //empty out question number spot
        questionField.innerHTML = "Would you like to play again?" //display play again message

        let replayButton = document.createElement("BUTTON");   //create, fill, and append play again button
        replayButton.innerHTML = "Play Again!";
        
        answerSection.appendChild(replayButton);
        questionNumber = 1; //number starts back at one. 

        //once the user clicks to play again, call up the functiion to play again! 
        replayButton.addEventListener("click", playGame);
    };




//when the page loads ask the user if they'd like to play the game. When they say yes, then run the code quiz. 

//point to the id tag "start" (the button)
let startGameButton = document.querySelector("#start");


//when start button is clicked, the code to play the game will run
startGameButton.addEventListener("click", playGame);

