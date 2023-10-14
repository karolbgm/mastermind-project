//Create my board/design my wireframe

//Create an array with 4 colors as elements

const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];

//Make computer choose 4 colors from my colors array randomly

const color1 = colors[Math.floor(Math.random() * 4)];
const color2 = colors[Math.floor(Math.random() * 4)];
const color3 = colors[Math.floor(Math.random() * 4)];
const color4 = colors[Math.floor(Math.random() * 4)];
const code_maker = [color1, color2, color3, color4];

//User will select colors from a dropdown color menu for each of the 4 holes

//Once user completes all holes, they will be able to submit guess/Guess will be saved to an user array

const colorInput1 = document.querySelector("#firstInput");
const firstPeg = document.querySelector("#position1.code-breaker");

const colorInput2 = document.querySelector("#secondInput");
const secondPeg = document.querySelector("#position2.code-breaker");

const colorInput3 = document.querySelector("#thirdInput");
const thirdPeg = document.querySelector("#position3.code-breaker");

const colorInput4 = document.querySelector("#fourthInput");
const fourthPeg = document.querySelector("#position4.code-breaker");

const code_breaker = [];
const guessBtn = document.querySelector("#guessBtn");

colorInput1.addEventListener("change", function () {
  firstPeg.style.backgroundColor = colorInput1.value;
  if (
    colorInput1.value === "#ff0000" ||
    colorInput1.value === "#00ff00" ||
    colorInput1.value === "#0000ff" ||
    colorInput1.value === "#ffff00"
  ) {
    code_breaker[0] = colorInput1.value;
    checkEnableGuessBtn();
  }
});

colorInput2.addEventListener("change", function () {
  secondPeg.style.backgroundColor = colorInput2.value;
  if (
    colorInput2.value === "#ff0000" ||
    colorInput2.value === "#00ff00" ||
    colorInput2.value === "#0000ff" ||
    colorInput2.value === "#ffff00"
  ) {
    code_breaker[1] = colorInput2.value;
    checkEnableGuessBtn();
  }
});

colorInput3.addEventListener("change", function () {
  thirdPeg.style.backgroundColor = colorInput3.value;
  if (
    colorInput3.value === "#ff0000" ||
    colorInput3.value === "#00ff00" ||
    colorInput3.value === "#0000ff" ||
    colorInput3.value === "#ffff00"
  ) {
    code_breaker[2] = colorInput3.value;
    checkEnableGuessBtn();
  }
});

colorInput4.addEventListener("change", function () {
  fourthPeg.style.backgroundColor = colorInput4.value;
  if (
    colorInput4.value === "#ff0000" ||
    colorInput4.value === "#00ff00" ||
    colorInput4.value === "#0000ff" ||
    colorInput4.value === "#ffff00"
  ) {
    code_breaker[3] = colorInput4.value;
    checkEnableGuessBtn();
  }
});

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
  // console.log(feedbackArr)
  const allSelectedSpaces = [];

  for (let i = 0; i < 4; i++) {
    let randomIndex;

    // Generate a random index that is not in feedbackArr
    do {
      randomIndex = Math.floor(Math.random() * 4);
    } while (feedbackArr.includes(randomIndex));

    feedbackArr.push(randomIndex);
    let selectedSpace = feedbackList[randomIndex];
    // console.log(selectedSpace)
    allSelectedSpaces.push(selectedSpace);
    if (code_maker[i] === code_breaker[i]) {
      selectedSpace.classList.add("blackPeg");
    } else if (code_maker.includes(code_breaker[i])) {
      selectedSpace.classList.add("whitePeg");
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
const feedbackList11 = document.querySelectorAll(".fb11");

//When user clicks Guess, colored pegs will be displayed on board in specific guess number
// let numberOfGuesses = 0;
let numberOfGuesses = 11;
const everyGuess = document.querySelectorAll(".guess");

guessBtn.addEventListener("click", function () {
  numberOfGuesses--; //starting at 11
  if (numberOfGuesses === 10) {
    feedbackList = feedbackList1;
  } else if (numberOfGuesses === 9) {
    feedbackList = feedbackList2;
  } else if (numberOfGuesses === 8) {
    feedbackList = feedbackList3;
  } else if (numberOfGuesses === 7) {
    feedbackList = feedbackList4;
  } else if (numberOfGuesses === 6) {
    feedbackList = feedbackList5;
  } else if (numberOfGuesses === 5) {
    feedbackList = feedbackList6;
  } else if (numberOfGuesses === 4) {
    feedbackList = feedbackList7;
  } else if (numberOfGuesses === 3) {
    feedbackList = feedbackList8;
  } else if (numberOfGuesses === 2) {
    feedbackList = feedbackList9;
  } else if (numberOfGuesses === 1) {
    feedbackList = feedbackList10;
  } else if (numberOfGuesses === 0) {
    feedbackList = feedbackList11;
  }
  if (numberOfGuesses >= 0) {
    everyGuess[numberOfGuesses].querySelector(
      "#position1"
    ).style.backgroundColor = code_breaker[0];
    everyGuess[numberOfGuesses].querySelector(
      "#position2"
    ).style.backgroundColor = code_breaker[1];
    everyGuess[numberOfGuesses].querySelector(
      "#position3"
    ).style.backgroundColor = code_breaker[2];
    everyGuess[numberOfGuesses].querySelector(
      "#position4"
    ).style.backgroundColor = code_breaker[3];

    feedback(feedbackList);
  }
});

//Checking wins 
// If feedback grid is all black - user wins, else user guesses again
//If user does not guess correctly within the 11 tries, game is over and computer wins
//Computer selection is displayed on board

const codemakerPeg1 = document.querySelector('#position1.code-maker')
const codemakerPeg2 = document.querySelector('#position2.code-maker')
const codemakerPeg3 = document.querySelector('#position3.code-maker')
const codemakerPeg4 = document.querySelector('#position4.code-maker')
const popupMessage = document.querySelector('#pop-message')
const popupBox = document.querySelector('.popup')
function checkWin(allSelectedSpaces) {
    let correctPegs = 0;
    for (let element of allSelectedSpaces) {
      if (element.classList.contains("blackPeg")) {
        correctPegs++;
      }
    }
    if (numberOfGuesses === 0){
        if(correctPegs !== 4){
         displayAnswer()   
         popupMessage.innerText = 'You lost!'
         popupBox.style.visibility = 'visible'
        }
    }
    if (correctPegs === 4) {
      displayAnswer()
      popupMessage.innerText = 'You won!'  
      popupBox.style.visibility = 'visible' 
    }
  }

//Restart option

function displayAnswer (){
codemakerPeg1.style.backgroundColor = code_maker[0]
codemakerPeg2.style.backgroundColor = code_maker[1]
codemakerPeg3.style.backgroundColor = code_maker[2]
codemakerPeg4.style.backgroundColor = code_maker[3]
}

