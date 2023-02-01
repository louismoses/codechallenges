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

//checks if this script is needed on the page
const guessPage = document.querySelector("#guessMyNumber");
if (guessPage) {
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  let score = 20;
  let highScore = 0;

  // function to display message
  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };

  //check my guess number challenge ==========================

  const guessPage = document.querySelector("#guessMyNumber");
  document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    // score not zero
    if (score) {
      //no input
      if (!guess) {
        // document.querySelector(".message").textContent = "⛔ No Number!";
        displayMessage("⛔ No Number!");
      }
      // when guess is correct
      else if (guess === secretNumber) {
        //document.querySelector(".message").textContent = "✅ Correct Number!";
        displayMessage("✅ Correct Number!");
        document.querySelector(".number").textContent = `${secretNumber}`;
        // inline css
        document.querySelector("body").style.background =
          "linear-gradient(to top left, #28b487, #7dd56f";
        document.querySelector(".number").style.width = "30rem";
        // high score
        if (score > highScore) {
          highScore = score;
          document.querySelector(".highscore").textContent = highScore;
        }
      }
      //when gues is wrong
      else if (guess !== secretNumber) {
        //document.querySelector(".message").textContent = guess > secretNumber ? "👆 Number too high!" : "👇 Number too low!";
        displayMessage(
          guess > secretNumber ? "👆 Number too high!" : "👇 Number too low!"
        );
        score--;
        document.querySelector(".score").textContent = score;
      }
      /*
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
    */
    } else {
      document.querySelector(".message").textContent = "💥You Lost the Game ";
    }
  });
  //play again -------------------
  document.querySelector(".again").addEventListener("click", function () {
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
    document.querySelector("body").style.background =
      "linear-gradient(to top left, #222, #222";
    document.querySelector(".number").style.width = "15rem";
  });
}

//checks if this script is needed on the page
const modalPage = document.querySelector("#modalPage");
if (modalPage) {
  //Modal page code challenge ================================
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const btnCloseModal = document.querySelector(".close-modal");
  const btnsShowModal = document.querySelectorAll(".show-modal");
  //show modal element
  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }; //hide modal element
  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };
  // click show modal element
  for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener("click", openModal);
  }

  //click hide modal element
  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
  });
}

//checks if this script is needed on the page
const pigDice = document.querySelector("#pig-dice-game");
if (pigDice) {
  //selecting elements
  const score0El = document.querySelector("#score--0");
  const score1El = document.querySelector("#score--1");
  const diceEl = document.querySelector(".dice");
  const rollDiceEl = document.querySelector(".btn--roll");
  const diceImageEl = document.querySelector(".dice");

  //starting conditions
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");

  const rollDice = function () {
    let diceValue = Math.trunc(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceImageEl.src = `dice-${diceValue}.png`;
    if (diceValue === 1) {
      console.log(diceValue);
    } else {
    }
  };

  rollDiceEl.addEventListener("click", rollDice);
}
