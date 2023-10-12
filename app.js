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

