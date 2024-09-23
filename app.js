// setting up variables from html file
let set;
let active = "focus";
let buttons = document.querySelectorAll(".btn");
let focusButton = document.getElementById("focus");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startButton = document.getElementById("start");
let restart = document.getElementById("restart");
let pauseButton = document.getElementById("pause");
let time = document.getElementById("time");

let paused = true;
let minutes = 24;
let seconds = 59;
time.textContent = `${minutes + 1}:00`;

// add a leading zero in the timer values if # is < 10
function appendZero(number) {
    if (number < 10) {
        return '0' + number;
    }
    else {
        return number;
    }
}

// functionality for restart button
restart.addEventListener("click", function restartTime() {
    console.log("Restart button clicked");
    pauseTimer();
    if (active === "long") {
        minutes = 14;
    }
    else if (active === "short") {
        minutes = 4;
    }
    else {
        minutes = 24;
    }

    seconds = 59;
    time.textContent = `${minutes + 1}:00`;
});

// functionality for the focus button
focusButton.addEventListener("click", function() {
    console.log("Focus button clicked");
    removeFocus();
    focusButton.classList.add("btn-focus");
    pauseTimer();
    active = "focus";
    minutes = 24;
    seconds = 59;
    time.textContent = `${minutes + 1}:00`;
})

// functionality for shortbreak button
shortBreakButton.addEventListener("click", function() {
    console.log("Short break button clicked");
    removeFocus();
    shortBreakButton.classList.add("btn-focus");
    pauseTimer();
    active = "short";
    minutes = 4;
    seconds = 59;
    time.textContent = `${minutes + 1}:00`;
})

// functionality for longbreak button
longBreakButton.addEventListener("click", function() {
    console.log("Long break button clicked");
    removeFocus();
    longBreakButton.classList.add("btn-focus");
    pauseTimer();
    active = "long";
    minutes = 14;
    seconds = 59;
    time.textContent = `${minutes + 1}:00`;
})

// pause timer
function pauseTimer() {
    console.log("Pause button clicked");
    paused = true;
    clearInterval(set);
    startButton.classList.remove("hide");
    pauseButton.classList.remove("show");
    restart.classList.remove("show");
}

pauseButton.addEventListener("click", pauseTimer);

// functionality for start button
startButton.addEventListener("click", function() {
    console.log("Start button clicked");
    pauseButton.classList.add("show");
    restart.classList.add("show");
    startButton.classList.add("hide");
    startButton.classList.remove("show");

    if (paused) {
        paused = false;
        time.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`
        set = setInterval(timerFunction, 1000);
    }
})

function timerFunction() {
    console.log("Timer running");
    seconds--;
    time.textContent = `${appendZero(minutes)}:${appendZero(seconds)}`

    if (seconds == 0) {
        if (minutes != 0) {
            minutes--;
            seconds = 60;
        }
        else {
            clearInterval(set);
        }
    }
}

// removing the css styling of btn-focus on a button
function removeFocus() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("btn-focus");
    }
}

