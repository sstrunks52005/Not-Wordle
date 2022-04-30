import {WORDS} from "./words.js";

//list of variables
const NUMBER_OF_GUESSES = 6
let guessesRemaining = NUMBER_OF_GUESSES
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]; // list of words stored in array in file words.js
console.log(rightGuessString)

//create game board
function initBoard() {
    let board = document.getElementById("game-board");

//this is a nested for loop to create the board 6 rows and 5 columns into it. appendChild(box) put box in row and puts on board

    for (let i = 0; i < NUMBER_OF_GUESSES; i++){
        let row = document.createElement("div")
        row.className = "letter-row"

        for (let j = 0; j <5; j++){
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initBoard()