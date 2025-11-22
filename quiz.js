// Quiz questions array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "Vladimir Putin" },
  { question: "Which language is used for Web development?", answer: "javascript" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {

    // Take user input
    let userAnswer = prompt(quizQuestions[i].question);

    // Stop if user presses Cancel
    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    // Normalize input safely
    userAnswer = userAnswer.toLowerCase().trim();

    // Check answer (case-insensitive + trimmed)
    if (userAnswer === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
    }
  }

  // Show final score
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}`);
}

runQuiz();
