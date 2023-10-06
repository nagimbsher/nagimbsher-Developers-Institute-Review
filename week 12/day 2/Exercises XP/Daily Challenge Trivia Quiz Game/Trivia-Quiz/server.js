// Daily Challenge : Trivia Quiz Game
// Last Updated: September 22nd, 2023

// Create A Trivia Quiz Game With Express.Js And Express.Router
// Instructions
// 1. Set up a new Express.js application.
// 2. Create a trivia quiz model with a set of hard-coded questions and answers.
// 3. Implement the following routes using express.Router:

// GET /quiz: Start the quiz and display the first question.
// POST /quiz: Submit an answer to the current question and move to the next question.
// GET /quiz/score: Display the user’s final score at the end of the quiz.
// 4. Keep track of the user’s score as they progress through the quiz.
// 5. Provide appropriate feedback on correct and incorrect answers.
// 6. Implement simple game logic such as displaying the next question after answering one.

// Sample trivia quiz questions and answers (hard-coded for simplicity)

// const triviaQuestions = [
//   {
//     question: "What is the capital of France?",
//     answer: "Paris",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     answer: "Mars",
//   },
//   {
//     question: "What is the largest mammal in the world?",
//     answer: "Blue whale",
//   },
// ];


const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));
app.use("/data", express.static(__dirname + "/data"));

const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}

// Routes
app.get("/", (req, res) => {
  res.render("index.ejs", { quizzes });
});

app.get("/quiz", (req, res) => {
  res.render("quiz.ejs", { query: req.query.name });
});

app.listen(3000);
