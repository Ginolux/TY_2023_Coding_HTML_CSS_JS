
// An array of question objects that contains each question, its options, and the correct answer
const questions = [

    {
        question: "Which language is used to structure and display content on the web?",
        options: {
            a: "CSS",
            b: "HTML",
            c: "JavaScript"
        },
        correctAnswer: 'b'
    },

    {
        question: "What does the 'CSS' in web development stand for?",
        options: {
            a: "Computer Style Sheets",
            b: "Creative Style System",
            c: "Cascading Style Sheets"
        },
        correctAnswer: 'c'
    },

    {
        question: "Which of the following is a JavaScript framework?",
        options: {
            a: "Django",
            b: "Angular",
            c: "Laravel"
        },
        correctAnswer: 'b'
    },
 
    {
        question: "What is the purpose of JavaScript in web development?",
        options: {
            a: "To create and style the structure of web pages",
            b: "To manage and operate databases",
            c: "To add interactivity to web pages"
        },
        correctAnswer: 'c'
    },
 
    {
        question: "Which HTML element is used to define the importance of the text?",
        options: {
            a: "<div>",
            b: "<meta>",
            c: "<strong>"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which property is used to change the background color of an element in CSS?",
        options: {
            a: "bgcolor",
            b: "color",
            c: "background-color"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which of these is NOT a valid JavaScript data type?",
        options: {
            a: "Undefined",
            b: "Number",
            c: "Method"
        },
        correctAnswer: 'c'
    },
    {
        question: "Which method is used to write a message in the web console?",
        options: {
            a: "console.write()",
            b: "console.log()",
            c: "console.output()"
        },
        correctAnswer: 'b'
    }
];

// Variable to keep track of the current question's index
let currentQuestionIndex = 0;

// Event listener for the start button to begin the quiz
document.getElementById("start-button").addEventListener("click", function() {
    // Hide the start button and show the quiz container when the quiz starts
    document.getElementById("start-button").style.display = 'none';
    document.getElementById("quiz-container").style.display = 'block';
    // Load the first question
    loadQuestion();
});

// Function to load a question onto the page
function loadQuestion() {
    // Check if there are still questions left to answer
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        // Display the current question and options
        document.getElementById("question").innerText = questionObj.question;
        document.getElementById("option-a").innerText = questionObj.options.a;
        document.getElementById("option-b").innerText = questionObj.options.b;
        document.getElementById("option-c").innerText = questionObj.options.c;
        // Reset the feedback text
        document.getElementById("feedback").innerText = '';
    } else {
        // If no questions are left, end the quiz
        endQuiz();
    }
}

// Function to check the selected answer against the correct answer
function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    // If the answer is correct, display 'Correct!'
    if (selectedOption === questionObj.correctAnswer) {
        document.getElementById("feedback").innerText = 'Correct!';
    } else {
        // If the answer is wrong, display 'Wrong. Try again.'
        document.getElementById("feedback").innerText = 'Wrong. Try again.';
        // Early return to prevent moving to the next question
        return;
    }
    // Increment the question index and load the next question after a delay
    currentQuestionIndex++;
    setTimeout(loadQuestion, 1000);
}

// Function to end the quiz and display a completion message
function endQuiz() {
    document.getElementById("quiz-container").innerHTML = '<p>Quiz Completed! Thanks for playing.</p>';
}
