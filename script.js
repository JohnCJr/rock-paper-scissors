"use strict";
// As of this moment, the game will take place exclusively within the console

// array that stores the possible choice either player can make
let choices = ["rock", "paper", "scissors"];
let winScore = 0;
let lossScore = 0;

// function that gets computer choice of either Rock, Paper, or Scissors
function computerSelection() {
  return choices[Math.floor(Math.random() * 3)]; // will return a random number between 0 and 2
}

// function that takes user input to make a choice
function playerSelection() {
  // takes in user input an converts it to a number
  let option = prompt(
    "Please enter one of the following: 1. rock  2. paper  3. scissors"
  ).toLowerCase();

  while (!choices.includes(option)) {
    option = prompt(
      "Invalid input. Please enter one of the following: 1. rock  2. paper  3. scissors"
    ).toLowerCase();
  }
  return option;
}

// function that takes in the player and computer choices and returns a result
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

// adds/removes style for resultBox div based on the outcome of the round
function addResultStyle(result) {
  if (result.includes("win")) {
    resultDisplay.classList.add("win");
  } else if (result.includes("lose")) {
    resultDisplay.classList.add("lose");
  } else {
    resultDisplay.classList.remove("win", "lose");
  }
}

function updateScore(winScore, lossScore) {
  winDisplay.textContent = winScore;
  lossDisplay.textContent = lossScore;
}

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    // console.log(button.value);
    roundResult.textContent = playRound(button.value, computerSelection());

    resultDisplay.appendChild(roundResult);
  })
);
