"use strict";
// As of this moment, the game will take place exclusively within the console

// array that stores the possible choice either player can make
let choices = ["rock", "paper", "scissors"];

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
    if (computerChoice === "paper") {
      result = "You lose. Paper beats Rock.";
    } else if (computerChoice === "scissors") {
      result = "You win! Rock beats Scissors.";
    } else {
      result = "it's a draw.";
    }
  } else if (playerSelection === "paper") {
    if (computerChoice === "rock") {
      result = "You win! Paper beats Rock.";
    } else if (computerChoice === "scissors") {
      result = "You lose. Scissors beats Paper.";
    } else {
      result = "it's a draw.";
    }
  } else {
    if (computerChoice === "rock") {
      result = "You lose. Rock beats Scissors.";
    } else if (computerChoice === "paper") {
      result = "You win! Scissors beats Paper.";
    } else {
      result = "it's a draw.";
    }
  }
  return result;
}

// function that loops through a round based on the parameter entered
function game(rounds) {
  // the values of the computer and player choices are initialized with an empty string
  let computerChoice = "";
  let playerChoice = "";

  // loops based on the number of rounds entered as a parameter
  for (let currentRound = 0; currentRound < rounds; currentRound++) {
    //values for the user and computer choices are assigned
    computerChoice = computerSelection();
    playerChoice = playerSelection();

    let result = playRound(playerChoice, computerChoice); // stores the result into a string
    console.log(result); // prints the result to the console.
  }
}

let result = playRound(playerChoice, computerChoice); // stores the result of the round
console.log(result);
