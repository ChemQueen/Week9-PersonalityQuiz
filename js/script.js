console.log("script.js connected!");

// Create an empty object that will store user data
let userAnswers = {};

// Select all answer buttons inside the #quiz-question container so we can attach click behavior
let buttons = document.querySelectorAll("#quiz-question-1 button");
// Debugging check: should print a Nodelist of 4 buttons. Remove before finishing
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
        userAnswers["1"] = button.dataset.answer;
        console.log(userAnswers);
    })
})

// Select all answer buttons inside the #quiz-question container so we can attach click behavior
let buttons2 = document.querySelectorAll("#quiz-question-2 button");
// Debugging check: should print a Nodelist of 4 buttons. Remove before finishing
console.log(buttons2);

buttons2.forEach(function(button) {
    // Code you want to run for each button

    //when this answer button is clicked, mark it as selected
    button.addEventListener("click", function() {
        // Debugging check: confirms the listener first. Remove before finalizing
        console.log("button clicked!");

        // Remove the selected class from all buttons
        buttons2.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        // Add the selected class to only the one that is clicked
        button.classList.add("selected");
        userAnswers["2"] = button.dataset.answer;
        console.log(userAnswers);
    })
})

// Select all answer buttons inside the #quiz-question container so we can attach click behavior
let buttons3 = document.querySelectorAll("#quiz-question-3 button");
// Debugging check: should print a Nodelist of 4 buttons. Remove before finishing
console.log(buttons3);

buttons3.forEach(function(button) {
    // Code you want to run for each button

    //when this answer button is clicked, mark it as selected
    button.addEventListener("click", function() {
        // Debugging check: confirms the listener first. Remove before finalizing
        console.log("button clicked!");

        // Remove the selected class from all buttons
        buttons3.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        // Add the selected class to only the one that is clicked
        button.classList.add("selected");
        userAnswers["3"] = button.dataset.answer;
        console.log(userAnswers);
    })
})

