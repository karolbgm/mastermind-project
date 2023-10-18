//Create my board/design my wireframe

//Create an array with 4 colors as elements

const colors = [
  "radial-gradient(circle at 14px 14px, rgb(255, 0, 0), rgb(0, 0, 0))",
  "radial-gradient(circle at 14px 14px, rgb(0, 0, 255), rgb(0, 0, 0))",
  "radial-gradient(circle at 14px 14px, rgb(255, 255, 0), rgb(0, 0, 0))",
  "radial-gradient(circle at 14px 14px, rgb(19, 190, 19), rgb(0, 0, 0))",
  "radial-gradient(circle at 14px 14px, rgb(255, 165, 0), rgb(0, 0, 0))",
  "radial-gradient(circle at 14px 14px, rgb(163, 10, 163), rgb(0, 0, 0))",
];

//Make computer choose 4 colors from my colors array randomly

const color1 = colors[Math.floor(Math.random() * 6)];
const color2 = colors[Math.floor(Math.random() * 6)];
const color3 = colors[Math.floor(Math.random() * 6)];
const color4 = colors[Math.floor(Math.random() * 6)];
const code_maker = [color1, color2, color3, color4];

//User will select colors from a dropdown color menu for each of the 4 holes

//Once user completes all holes, they will be able to submit guess/Guess will be saved to an user array

const code_breaker = [];

const guessBtn = document.querySelector("#guessBtn");

const allColorPegs = document.querySelectorAll(".colors");
let chosenColor = "";
for (let i = 0; i < allColorPegs.length; i++) {
  allColorPegs[i].addEventListener("click", function () {
    chosenColor = getComputedStyle(allColorPegs[i]).backgroundImage;
  });
}

const guessColors = document.querySelectorAll(".code-breaker");
for (let i = 0; i < guessColors.length; i++) {
  guessColors[i].addEventListener("click", function () {
    guessColors[i].style.background = chosenColor;
    if (chosenColor !== "") {
      code_breaker[i] = guessColors[i].style.background;
    }
    checkEnableGuessBtn();
  });
}

function checkEnableGuessBtn() {
  if (code_breaker.length === 4) {
    guessBtn.disabled = false;
  } else {
    guessBtn.disabled = true;
  }
}

//Computer will compare user array with its own array
//Computer will select a position from feedback space and change color to black or white
//Computer will check if:
//1 - color is equal and it's in the same index position of computer array
//2 - color is contained inside computer array

//Conditionals:
//if color is contained but not on the same position: white peg
////if color is contained and on the same position: black peg

function feedback(feedbackList) {
  const feedbackArr = [];
  const allSelectedSpaces = [];
  let code_maker_copy = code_maker.slice();


  for (let i = 0; i < 4; i++) {


    let randomIndex;
    // Generate a random index that is not in feedbackArr
    do {
      randomIndex = Math.floor(Math.random() * 4);
    } while (feedbackArr.includes(randomIndex));


    feedbackArr.push(randomIndex);
    let selectedSpace = feedbackList[randomIndex];
    allSelectedSpaces.push(selectedSpace);
    if (code_breaker[i] === code_maker_copy[i]) {
      selectedSpace.classList.add('blackPeg');
      code_maker_copy[i] = 'z';
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (code_breaker[i] === code_maker_copy[j]) {
        // Make sure it's not already marked as black peg
        if (!allSelectedSpaces[i].classList.contains('blackPeg')) {
          allSelectedSpaces[i].classList.add('whitePeg');
          code_maker_copy[j] = 'z';
          break; // Optional, if you want each code_breaker[i] to match only once.
        }
      }
    }
  }
  checkWin(allSelectedSpaces);
}



const feedbackList1 = document.querySelectorAll(".fb1");
const feedbackList2 = document.querySelectorAll(".fb2");
const feedbackList3 = document.querySelectorAll(".fb3");
const feedbackList4 = document.querySelectorAll(".fb4");
const feedbackList5 = document.querySelectorAll(".fb5");
const feedbackList6 = document.querySelectorAll(".fb6");
const feedbackList7 = document.querySelectorAll(".fb7");
const feedbackList8 = document.querySelectorAll(".fb8");
const feedbackList9 = document.querySelectorAll(".fb9");
const feedbackList10 = document.querySelectorAll(".fb10");

//When user clicks Guess, colored pegs will be displayed on board in specific guess number

// let numberOfGuesses = 0;

let numberOfGuesses = 10;
const everyGuess = document.querySelectorAll(".guess");

guessBtn.addEventListener("click", function () {
  numberOfGuesses--; //starting at 11
  if (numberOfGuesses === 9) {
    feedbackList = feedbackList1;
  } else if (numberOfGuesses === 8) {
    feedbackList = feedbackList2;
  } else if (numberOfGuesses === 7) {
    feedbackList = feedbackList3;
  } else if (numberOfGuesses === 6) {
    feedbackList = feedbackList4;
  } else if (numberOfGuesses === 5) {
    feedbackList = feedbackList5;
  } else if (numberOfGuesses === 4) {
    feedbackList = feedbackList6;
  } else if (numberOfGuesses === 3) {
    feedbackList = feedbackList7;
  } else if (numberOfGuesses === 2) {
    feedbackList = feedbackList8;
  } else if (numberOfGuesses === 1) {
    feedbackList = feedbackList9;
  } else if (numberOfGuesses === 0) {
    feedbackList = feedbackList10;
  }
  if (numberOfGuesses >= 0) {
    everyGuess[numberOfGuesses].querySelector("#position1").style.background =
      code_breaker[0];
    everyGuess[numberOfGuesses].querySelector("#position2").style.background =
      code_breaker[1];
    everyGuess[numberOfGuesses].querySelector("#position3").style.background =
      code_breaker[2];
    everyGuess[numberOfGuesses].querySelector("#position4").style.background =
      code_breaker[3];

    feedback(feedbackList);
  }
});

//Checking wins
// If feedback grid is all black - user wins, else user guesses again
//If user does not guess correctly within the 11 tries, game is over and computer wins
//Computer selection is displayed on board

const codemakerPeg1 = document.querySelector("#position1.code-maker");
const codemakerPeg2 = document.querySelector("#position2.code-maker");
const codemakerPeg3 = document.querySelector("#position3.code-maker");
const codemakerPeg4 = document.querySelector("#position4.code-maker");
const popupMessage = document.querySelector("#pop-message");
const popupBox = document.querySelector(".popup");
function checkWin(allSelectedSpaces) {
  let correctPegs = 0;
  for (let element of allSelectedSpaces) {
    if (element.classList.contains("blackPeg")) {
      correctPegs++;
    }
  }
  if (numberOfGuesses === 0) {
    if (correctPegs !== 4) {
      displayAnswer();
      popupMessage.innerText = "You lost!";
      popupBox.style.visibility = "visible";
      guessBtn.disabled = true;
    }
  }
  if (correctPegs === 4) {
    displayAnswer();
    popupMessage.innerText = "You won!";
    popupBox.style.visibility = "visible";
    guessBtn.disabled = true;
  }
}

//Restart option

function displayAnswer() {
  codemakerPeg1.style.background = code_maker[0];
  codemakerPeg2.style.background = code_maker[1];
  codemakerPeg3.style.background = code_maker[2];
  codemakerPeg4.style.background = code_maker[3];
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("instructions");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
