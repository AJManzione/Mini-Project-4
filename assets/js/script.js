// Variables:
// Array with 10 words
var words = ["JavaScript", "flexbox", "Attributes", "Local Storage", "CSS", "HTML", "website", "object", "branch", "pull request"];

// Start Game Button
var startBtn = document.querySelector("#play");
// Score object
//      wins
//      loses
var score = {
    wins: 0,
    loses: 0
}
// Current word (as an array of LETTER objects) - use split function
//      letter
//      visibility
var current = [];

// HTML elements:
// diplay word
var displayWord = document.querySelector("#display-word");
// timer
var time = document.querySelector("#time");
// winds
var wins = document.querySelector("#wins");
// loses
var loses = document.querySelector("#loses");

// button to start game
//  event listener for click associated with id
//  when click:
//      - timer reset to 30
//      - then choose random word


// pick a random word for list
//      hide certain letters
// when called:
//      - choose random word
//      - choose random letters to show (letter status hidden and visible)
//      - display word to user 
//          - shown letters
//          - hidden letters underscore
//      - listen for key event

// get user input (which keys they type)
    // if key = next missing character, 
    // display character/replace of underscore with proper letter
// continue down path until word is completed or timer runs out
// when type:
//       - if key = next missing character
//             - display character/replace of underscore with proper letter
//      - when randomWord.length has all shown
//             - add 1 to win
//      - display high score

// if user hits word before timer runs out, add 1 to win 
//      if greater than stored high score, save time as score
// else, add 1 to losses

// timer 30 seconds (count down from 30) - display on screen
//      if timer runs out, add to losses (local storage)

