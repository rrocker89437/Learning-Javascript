// document.getElementById("count").innerText = 5;

// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el");

// intialize the count as 0
let count = 0;

// listen for clicks on the increment button
function increment() {
  //   console.log("The button was clicked");
  // increment the count variable when the button is clicked
  count += 1;
  //countEl.innerText = count;
  countEl.textContent = count;
  console.log(count);
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let countStr = count + " - ";
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph

  //--saveEl.innerText += countStr;

  // Google:
  // innerText alternative mdn
  saveEl.textContent += countStr;

  // Reset the People entered when save it clicked
  count = 0;
  countEl.textContent = count;
  //   OR
  // countEl.textContent = 0;
  // count = 0
  console.log(count);
}

// ------------------------------------------------------------
//CALCULATOR
// ------------------------------------------------------------

let num1 = 8;
let num2 = 2;
let total = 0;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2

function add() {
  let total = num1 + num2;
  sumEl.textContent = "Sum: " + total;
}

function subtract() {
  let total = num1 - num2;
  sumEl.textContent = "Sum: " + total;
}

function divide() {
  let total = num1 / num2;
  sumEl.textContent = "Sum: " + total;
}

function multiply() {
  let total = num1 * num2;
  sumEl.textContent = "Sum: " + total;
}

function eraseText() {
  let total = 0;
  sumEl.textContent = "Sum: ";
  //   document.getElementById("reset").value = "";
}

// Render the result of the calculation in the paragraph with id="sum-el"
// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// ------------------------------------------------------------
//Game Score Tracker
// ------------------------------------------------------------
// document.getElementById("score-el").textContent = score;
let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeStoreEl = document.getElementById("home-score");
let homeScore = 0;

function newGame() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").textContent = 0;
  document.getElementById("guest-score").textContent = 0;
}

function addOne() {
  homeScore += 1;
  homeStoreEl.textContent = homeScore;
}
function addTwo() {
  homeScore += 2;
  homeStoreEl.textContent = homeScore;
}
function addThree() {
  homeScore += 3;
  homeStoreEl.textContent = homeScore;
}

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestStoreEl = document.getElementById("guest-score");
let guestScore = 0;

function addOneG() {
  guestScore += 1;
  guestStoreEl.textContent = guestScore;
}
function addTwoG() {
  guestScore += 2;
  guestStoreEl.textContent = guestScore;
}
function addThreeG() {
  guestScore += 3;
  guestStoreEl.textContent = guestScore;
}

// const scoreSpans = document.querySelectorAll(".scoreNum");

// scoreSpans.forEach((span) => {
//   const score = parseInt(span.textContent);

//   if (score > 1) {
//     // Define your threshold here
//     span.style.backgroundColor = "yellow"; // Highlight with a yellow background
//   }
// });

// function TestTextHighlighting(highlightText) {
//   var container = document.getElementById("guest-score");
//   //   InstantSearch.highlight(container, highlightText);
//   span.style.backgroundColor = "yellow";
// }
