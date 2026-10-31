console.log("script.js connected!");

// Create an empty object that will store user data
let userAnswers = {};

// Select all questions inside the #question-block container
let questions = document.querySelectorAll(".question-block");
// Debugging check: should print a Nodelist of 3 questions. 
console.log(questions);

questions.forEach(function(question) {
// Code you want to run for each question
    // Select all answer buttons inside the #answer-btn container so we can attach click behavior
    let buttons = question.querySelectorAll(".answer-btn");
    // Debugging check: should print a Nodelist of 2 buttons. 
    console.log(buttons);

    buttons.forEach(function(button) {
    // Code you want to run for each button
        //when this answer button is clicked, mark it as selected
        button.addEventListener("click", function() {
            // Debugging check: confirms the listener first. 
            console.log("button clicked!");

            // Remove the selected class from all buttons
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            // Add the selected class to only the one that is clicked
            button.classList.add("selected");

        // Get the data use the dataset attribute
        let questionID = button.dataset.question;
        let answer = button.dataset.answer;

        // Store the data in the object
        userAnswers[questionID] = answer;
        console.log(userAnswers);
        })
    })
})

function displayResult(userAnswers) {
    // Tally users stored answers using quiz scoring logic

    let userScore = 0;
    let quizResult = "";
    let quizChemistry = "";
    
    for (let i=1; i <= 3; i++) {
        if (userAnswers[i] === 'A') {
            userScore +=1;   
        }  
    }
    
    console.log("userScore is " + userScore)
    
    if (userScore === 0) {
        quizResult = ("Your element is GOLD (Au) - You're dependable and you don't tarnish under pressure. You rarely react to drama, and everyone knows you're worth having around.");
        quizChemistry = ("The chemistry - Gold is one of the least reactive metals and does not corrode in air or water.");
    } else if (userScore === 1) {
        quizResult = ("Your element is CARBON (C) - You're versatile and you bond with everyone. Whether the group needs a study partner, a road trip buddy, or a mediator, you can fill the role.");
        quizChemistry = ("The chemistry - Carbon forms four bonds and links with itself and many other elements, which is the basis of organic chemistry.");

    } else if (userScore === 2) {
        quizResult = ("Your element is NEON (Ne) - You light up any room you walk into, but you keep your own energy. You're fun to be around and you're not easily pulled into other people's reactions.");
        quizChemistry = ("The chemistry - Neon is a noble gas with a full outer shell, so it essentially forms no compounds, and it glows when an electric current passes through it.");
    }
    else if (userScore === 3) {
        quizResult = ("Your element is SODIUM (Na) - You're highly reactive and dramatic, and things get interesting when you're added to the mix. Please keep away from water.");
        quizChemistry = ("The chemistry - Sodium is an alkali metal with one outer electron. It reacts vigorously with water and is stored under oil.");
    }

    console.log(quizResult);
    console.log(quizChemistry);

    // Function returns a results object
    return {result: quizResult, chemistry: quizChemistry};
}

let showResultBtn = document.getElementById("show-result");

showResultBtn.addEventListener("click", function() {
    // Function displayResult call that returns quizOutput, an object that contains results
    let quizOutput = displayResult(userAnswers);

    // Update the text inside <div id='result-container"> by getting 'result-text' and 'result-chemistry' and modifying.
    let resultText = document.getElementById("result-text");
    resultText.textContent = quizOutput.result;
    let resultChemistry = document.getElementById("result-chemistry");
    resultChemistry.textContent = quizOutput.chemistry;

    // Claude consulted re: how to show the id='result-container'
    document.getElementById("result-container").style.display = "block";
});

