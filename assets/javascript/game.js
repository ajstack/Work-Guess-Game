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

// setup do display to html
var winCount = document.getElementById("winCount");
var word = document.getElementById("word");
var guessCount = document.getElementById("guessCount");
var attemptsLeft = 10;
var letters = document.getElementById("letters");
var win = wordLength;
var output = "";
var display = [wordLength];

// Display how many guesses left
guessCount.textContent = attemptsLeft;
winCount.textContent = 0;


// Choose random # to correspond with array words
var choice = Math.floor(Math.random() * wordList.length);
var answer = wordList[choice];
var wordLength = answer.length;


// display how many letters from word chosen {not working}

var setup = function(){
    for (var i = 0; i < answer.length; i++) {
        display[i] = "_ ";
        output = output + display[i];
    }

    word.textContent = output;
    
}
// onkeyup function event
document.onkeyup = function(event) {
var userGuess = event.key;

// make all keys uppercase
userGuess = userGuess.toUpperCase();

// print guess to html
letters.textContent = userGuess; 

// keep track of all letters pressed // trigger-random-unsolved week 4 day 2


// for loop (var i=0; i<=(forever? until words run out?); i++)
    // if statement
        // if word has been guessed wins++
        // else if #guessCount=0 
        //else
            // if statement
                // if letter is in word, display in #word
                // else letter is not in word, display in #letters, #guessCount -1


}