// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// codding challenge - temperature forcast
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let message = "";
  for (let i = 0; i < arr.length; i++) {
    let days = i + 1;
    let temp = arr[i];
    message += `... ${temp}°C in ${days} days `;
  }
  console.log(message);
}

printForecast(testData1);
printForecast(testData2);
