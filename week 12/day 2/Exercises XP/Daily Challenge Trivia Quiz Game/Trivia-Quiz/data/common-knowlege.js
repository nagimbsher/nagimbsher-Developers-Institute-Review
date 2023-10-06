const quizData = {
  title: "triviaQuestions"
};

const questions = [
  {
    text: "What is the capital of France?",
    type: "mc",
    answers: [
      { text: "New York City", correct: false },
      { text: "Philadelphia", correct: false },
      { text: "   Paris    ", correct: true },
      { text: "Chicago", correct: false }
    ]
  },
  {
    text: "Which planet is known as the Red Planet?",
    type: "mc",
    answers: [
      { text: "Tarid", correct: false },
      { text: "Mars", correct: true },
      { text: "Zahal", correct: false },
      { text: "Nabtun", correct: false }
    ]
  },
  {
    text: "What is the largest mammal in the world?",
    type: "txt",
    answers: ["Blue whale"]
  }
];

module.exports = { quizData, questions };
