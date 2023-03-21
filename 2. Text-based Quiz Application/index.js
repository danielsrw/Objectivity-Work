// Define an array of questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Paris", "Berlin", "Madrid", "London"],
    correctAnswer: 0
  },
  {
    question: "What is the largest organ in the human body?",
    answers: ["Liver", "Lungs", "Heart", "Skin"],
    correctAnswer: 3
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: ["Ag", "Au", "Fe", "Hg"],
    correctAnswer: 1
  },
  {
    question: "What is the tallest mammal?",
    answers: ["Elephant", "Giraffe", "Horse", "Camel"],
    correctAnswer: 1
  },
];

// Define a variable to keep track of the user's score
let score = 0;

// Define a function to select a random question from the array
function selectRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Define a function to display the question to the user and get their answer
function askQuestion(question) {
  console.log(question.question);
  for (let i = 0; i < question.answers.length; i++) {
    console.log(`${i + 1}. ${question.answers[i]}`);
  }
  const userAnswer = parseInt(prompt("Enter your answer (1-4):"));
  if (userAnswer === question.correctAnswer + 1) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Incorrect.");
  }
}

// Loop through all the questions, ask them to the user, and update the score
for (let i = 0; i < questions.length; i++) {
  const question = selectRandomQuestion();
  askQuestion(question);
}

// Display the final score to the user
console.log(`You scored ${score} out of ${questions.length}.`);
