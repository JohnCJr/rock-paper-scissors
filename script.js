"use strict";

let choices = ["rock", "paper", "scissors"]; // array that stores the possible choices the computer can make
let winScore = 0;
let lossScore = 0;

// function that gets computer choice of either Rock, Paper, or Scissors
function computerSelection() {
  return choices[Math.floor(Math.random() * 3)]; // will return a random number between 0 and 2
}

// function that takes in the player and computer choices and returns a result,
// updates the score, and updates the color of the text displaying the result on the page
function playRound(playerSelection, computerSelection) {
  let result = ""; // stores the result of the round

  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "You lose. Paper beats Rock.";
      lossScore++;
    } else if (computerSelection === "scissors") {
      result = "You win! Rock beats Scissors.";
      winScore++;
    } else {
      result = "It's a draw between Rock and Rock.";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      result = "You win! Paper beats Rock.";
      winScore++;
    } else if (computerSelection === "scissors") {
      result = "You lose. Scissors beats Paper.";
      lossScore++;
    } else {
      result = "It's a draw between Paper and Paper.";
    }
  } else {
    if (computerSelection === "rock") {
      result = "You lose. Rock beats Scissors.";
      lossScore++;
    } else if (computerSelection === "paper") {
      result = "You win! Scissors beats Paper.";
      winScore++;
    } else {
      result = "It's a draw between Scissors and Scissors.";
    }
  }
  updateScore(winScore, lossScore);
  addResultStyle(result);
  return result;
}

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".resultBox");
const roundResult = document.createElement("p");
const winDisplay = document.querySelector(".winScore");
const lossDisplay = document.querySelector(".lossScore");

// adds/removes style for resultBox div based on the text within result
function addResultStyle(result) {
  // resets the class style before any class is added
  resultDisplay.classList.remove("win", "lose");

  if (result.includes("win")) {
    resultDisplay.classList.add("win");
  } else if (result.includes("lose")) {
    resultDisplay.classList.add("lose");
  }
}

// updates the text containing the score to the current score
function updateScore(winScore, lossScore) {
  winDisplay.textContent = winScore;
  lossDisplay.textContent = lossScore;
}

// adds event listener for each button that will play a round with the user's choice
buttons.forEach((button) =>
  button.addEventListener("click", () => {
    roundResult.textContent = playRound(button.value, computerSelection());

    // appends new <p> tag with result inside the div with the resultBox class
    resultDisplay.appendChild(roundResult);
  })
);
