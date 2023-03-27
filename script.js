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
  const player0El = document.querySelector(".player--0");
  const player1El = document.querySelector(".player--1");
  const score0El = document.querySelector("#score--0");
  const score1El = document.querySelector("#score--1");
  const current0El = document.getElementById("current--0");
  const current1El = document.getElementById("current--1");

  const diceEl = document.querySelector(".dice");
  const btnRoll = document.querySelector(".btn--roll");
  const btnHold = document.querySelector(".btn--hold");
  const btnNew = document.querySelector(".btn--new");

  let scores, currentScore, activePlayer, playing;

  const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    //starting conditions
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add("hidden");

    player0El.classList.remove("player--winner");
    player0El.classList.add("player--active");
    player1El.classList.remove("player--winner");
    player1El.classList.remove("player--active");
  };

  init();

  const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  };

  btnRoll.addEventListener("click", function () {
    if (playing) {
      //generate random number
      let diceValue = Math.trunc(Math.random() * 6 + 1);
      // display dice
      diceEl.classList.remove("hidden");
      diceEl.src = `dice-${diceValue}.png`;
      //
      if (diceValue === 1) {
        // switch to next player
        switchPlayer();
      } else {
        currentScore += diceValue;
        document.getElementById(`current--${activePlayer}`).textContent =
          currentScore;
      }
    }
  });

  btnHold.addEventListener("click", function () {
    if (playing) {
      //add current score to total score
      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      // if score is greater than 100 player wins!
      if (scores[activePlayer] >= 10) {
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove("player--active");
        playing = false;
        diceEl.classList.add("hidden");
      }
      //if score no greater than 99 switch player
      else {
        switchPlayer();
      }
    }
  });
  btnNew.addEventListener("click", init);
}

//video 96
//video 97
//console.log(this);
//video 98
//video 99
//video 100
<<<<<<< HEAD
//video 103 destructuring arrays this is it pansit
=======
//video 103 destructuring arrays
>>>>>>> 0d32c16598ccce0e86d72f17f0f4537017ad3cba

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
