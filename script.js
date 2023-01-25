// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// codding challenge - temperature forcast
/*const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let message = "";
  for (let i = 0; i < arr.length; i++) {
    // let days = i + 1;
    // let temp = arr[i];
    message += ` ${arr[i]}°C in ${i + 1} days ... `;
  }
  console.log("..." + message);
};

printForecast(testData1);
printForecast(testData2);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // score not zero
  if (score) {
    //no input
    if (!guess) {
      document.querySelector(".message").textContent = "⛔ No Number!";
    }
    // when player win!
    else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "✅ Correct Number!";
      document.querySelector(".number").textContent = `${secretNumber}`;
      // inline css
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
    }
    //number too high
    else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "👆 Number too high!";
      score--;
      document.querySelector(".score").textContent = score;
    }
    //number too low
    else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "👇 Number too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent = "💥You Lost the Game ";
  }
});
document.querySelector(".again").addEventListener("click", function () {
  console.log("again", secretNumber);
  //restore score
  score = 20;
  //restore secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = `?`;
  //restore number
  document.querySelector(".guess").value = "";
  //restore message
  document.querySelector(".message").textContent = "Start guessing...";
  //restore background
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
console.log(secretNumber);
