// Declare variables and word array (array must be in all caps)
var wordList = [
    "BATMAN",
    "ROBIN",
    "NIGHTWING",
    "REDHOOD",
    "REDROBIN",
    "JOKER",
    "PENGUIN",
    "CATWOMAN",
    "MRFREEZE",
    "BATGIRL",
    "BATWOMAN" 
];

var winCount = document.getElementById("winCount");
var word = document.getElementById("word");
var guessCount = document.getElementById("guessCount");
var letters = document.getElementById("letters");

// onkeyup function event
document.onkeyup = function(event) {

var userGuess = event.key;

letters.textContent = event.key; // Cannot set property textContent of null error 

// computer chooses a random word form array

// display how many letters from word chosen

// determine what key is pressed

// make all keys uppercase

// for loop (var i=0; i<=(forever? until words run out?); i++)
    // if statement
        // if word has been guessed wins++
        // else if #guessCount=0 
        //else
            // if statement
                // if letter is in word, display in #word
                // else letter is not in word, display in #letters, #guessCount -1

}