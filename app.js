// document.getElementById("count").innerText = 5;

// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el");
// console.log(countEl);
// intialize the count as 0
let count = 0;
// listen for clicks on the increment button
function increment() {
  //   console.log("The button was clicked");
  // increment the count variable when the button is clicked
  count = count + 1;
  countEl.innerText = count;
  console.log(count);
}
// 1. Create a function, save(), which logs out the count when it's called
function save() {
  console.log(count);
}
