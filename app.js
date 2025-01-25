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
  let countStr = count + " - ";
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
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
