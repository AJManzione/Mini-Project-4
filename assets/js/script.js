// Variables:
// Array with 10 words
var words = ["JavaScript", "flexbox", "Attributes", "Local Storage", "CSS", "HTML", "website", "object", "branch", "pull request"];
var wordsPushed = "";
// Start Game Button
var startBtn = document.getElementById("play");
// Score object
//      wins
//      losses
var score = {
    wins: 0,
    losses: 0
}
// Current word (as an array of LETTER objects) - use split function
//      letter
//      visibility
var currentWord = "";
var newWord = ""


// HTML elements:
// diplay word
var displayWordEl = document.getElementById("display-word");
// timer
var timerEl = document.getElementById("time");
// winds
var winsEl = document.getElementById("wins");
// losses
var lossesEl = document.getElementById("losses");

// timer
var timeLeft = 0;


// button to start game
//  event listener for click associated with id
//  when click:
//      - timer reset to 30
//      - then choose random word
startBtn.addEventListener("click", chooseRandomWord);

// pick a random word for list
//      hide certain letters
//      when called:
//      - choose random word
//      - choose random letters to show (letter status hidden and visible)
//      - display word to user 
//          - shown letters
//          - hidden letters underscore
//      - listen for key event
function chooseRandomWord() {
    // choose random word
    var random = Math.floor(Math.random()* (words.length - 1));
     currentWord = words[random];
    


    displayWordEl.textContent = currentWord;
    


    // choose 2 random letters to show
    var randomLetters = [];
    for (var i = 0; i < 2; i++) {
        var randomLetter = Math.floor(Math.random()* (currentWord.length - 1));
        if (!randomLetters.includes(randomLetter)) {
            randomLetters.push(randomLetter);
        }
    }
  
      for ( var b = 0; b <currentWord.length; b++) {
        
        if (randomLetters.includes(b)) {
          wordsPushed = wordsPushed.concat(currentWord.charAt(b));
        } 
        else {
          wordsPushed = wordsPushed.concat("_");
          
        }
      }
      displayWordEl.textContent = wordsPushed;
}
  

  document.addEventListener("keydown", checkLetter)

  function checkLetter (event) {
    var keyPress = event.key;



        //When the key is pressed and is included within random word

    if (currentWord.includes(keyPress)) {

    }

  }



  
    // 2 indexes which have shown letters
    // we need text which has a hidden visbility and a visible visibility
    //      hidden --> _
    //      visible --> word[i] (or letter)
    // on key down
    //      if key = hidden letter 
    //          change state to visible
    //          remove letter from remainingChar
    // variable remainingChar: contains remaining letters. 
    //      Once empty, player wins

    
    


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

function countDown() {
    timeLeft = 30;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  //We then declare timeInterval and assign it the value of setInterval(). Here, we will update the text in timerEl at an interval of 1000 ms, or 1 second. With each interval, we decrement the value of timeLeft. If timeLeft is equal to 0, we use clearInterval() to stop timeInterval().
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    // timeLeft--;
    if (timeLeft > 0) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);

      // Call the `displayMessage()` function
      loseGame();
    }
  }, 1000);
};

function loseGame() {
    score.losses++;
    localStorage.setItem("score", JSON.stringify(score));

    lossesEl.textContent = score.losses;
}