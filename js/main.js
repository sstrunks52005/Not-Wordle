import {WORDS} from "./words.js";

const numberOfGusses = 6
let guessesRemaining = numberOfGuesses
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]; // list of words stored in array in file words.js
console.log(rightGuessString)