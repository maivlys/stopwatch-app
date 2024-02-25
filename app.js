const startBtn = document.querySelector(".js-start-btn");
const stopBtn = document.querySelector(".js-stop-btn");
const resetBtn = document.querySelector(".js-reset-btn");

const hoursHTML = document.querySelector(".js-hours");
const minutesHTML = document.querySelector(".js-minutes");
const secondsHTML = document.querySelector(".js-seconds");

let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;

startBtn.addEventListener(
  "click",
  () => (intervalId = setInterval(counting, 1000))
);
stopBtn.addEventListener("click", () => clearInterval(intervalId));
resetBtn.addEventListener("click", resetTimer);

function counting() {
  // if (seconds < 59) {
  //   seconds++;
  // } else {
  //   seconds = 0;
  //   if (minutes < 59) {
  //     minutes++;
  //   } else {
  //     minutes = 0;
  //     hours++;
  //   }
  // }

  if (seconds < 59) {
    seconds++;
  } else if (minutes < 59) {
    seconds = 0;
    minutes++;
  } else {
    seconds = 0;
    minutes = 0;
    hours++;
  }

  secondsHTML.innerHTML = String(seconds).padStart(2, "0");
  minutesHTML.innerHTML = String(minutes).padStart(2, "0");
  hoursHTML.innerHTML = String(hours).padStart(2, "0");
}

function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  hoursHTML.innerHTML = "00";
  minutesHTML.innerHTML = "00";
  secondsHTML.innerHTML = "00";
}
