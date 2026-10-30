console.log("script.js connected!");

// Create an empty object that will store user data
let userAnswers = {};

// Select all questions inside the #question-block container
let questions = document.querySelectorAll(".question-block");
// Debugging check: should print a Nodelist of 3 questions. Remove before finishing
console.log(questions);

questions.forEach(function(question) {
// Code you want to run for each question
    // Select all answer buttons inside the #answer-btn container so we can attach click behavior
    let buttons = question.querySelectorAll(".answer-btn");
    // Debugging check: should print a Nodelist of 2 buttons. Remove before finishing
    console.log(buttons);

    buttons.forEach(function(button) {
    // Code you want to run for each button
        //when this answer button is clicked, mark it as selected
        button.addEventListener("click", function() {
            // Debugging check: confirms the listener first. Remove before finalizing
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

