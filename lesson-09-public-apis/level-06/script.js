const questionEl6 = document.getElementById("question");
const choicesEl6 = document.getElementById("choices");
const feedbackEl6 = document.getElementById("feedback");

async function loadQuestion() {
  // Reset state
  feedbackEl6.innerText = "";
  choicesEl6.innerHTML = "";
  questionEl6.innerText = "Loading...";

  const response = await fetch("https://api.jsoning.com/mock/public/trivia");
  const data = await response.json();
  const trivia = data[0];

  questionEl6.innerText = trivia.question.text;

  // Combine correct and incorrect answers, then shuffle
  const choices = [trivia.correctAnswer, ...trivia.incorrectAnswers].sort(() => Math.random() - 0.5);

  choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.addEventListener("click", () => {
      const isCorrect = choice === trivia.correctAnswer;
      feedbackEl6.innerText = isCorrect ? "Correct!" : `Incorrect. The right answer was: ${trivia.correctAnswer}`;

      // Provide a control for the next question
      const nextBtn = document.createElement("button");
      nextBtn.innerText = "Next Question";
      nextBtn.onclick = loadQuestion;
      feedbackEl6.appendChild(nextBtn);
    });
    choicesEl6.appendChild(btn);
  });
}

loadQuestion();
