const startBtn = document.querySelector(".js-start-btn");
const stopBtn = document.querySelector(".js-stop-btn");
const resetBtn = document.querySelector(".js-reset-btn");
const timerDisplay = document.querySelector(".js-timer-display");

startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click");
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  timerDisplay.innerHTML = "00:00:01";
}

// function stopTimer() {}

function resetTimer() {
  timerDisplay.innerHTML = "00:00:00";
}
