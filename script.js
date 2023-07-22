"use strict";
// As of this moment, the game will take place exclusively within the console

// array that stores the possible choice either player can make
let choices = ["rock", "paper", "scissors"];

// function that gets computer choice of either Rock, Paper, or Scissors
function computerSelection() {
  return choices[Math.floor(Math.random() * 3)]; // will return a random number between 0 and 2
}

// function that takes user input to make a choice
function playerSelection() {}

// function that takes in the player and computer choices and returns a result
function playRound(playerSelection, computerSelection) {}

// function that loops through a round based on the parameter entered
function game(rounds) {}

let computerChoice = computerSelection();
console.log(computerChoice);
