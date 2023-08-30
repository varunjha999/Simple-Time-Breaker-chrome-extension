// document.addEventListener("DOMContentLoaded", () => {
//      let timer; // store the interval reference

//      let timerValues = {
//           hour: 0,
//           min: 0,
//           sec: 0
//      }
//      let isTimerOn = false;
//      let isPaused = false;

//      const display = document.getElementById("display");
//      const inputs = document.getElementById("inputs");
//      const resetBtn = document.getElementById("reset");
//      const pause_resumeBtn = document.getElementById("pause-resume");

//      const hourDisplay = document.getElementById("hour");
//      const minDisplay = document.getElementById("min");
//      const secDisplay = document.getElementById("sec");

//      const hourInp = document.getElementById("hour-inp");
//      const minInp = document.getElementById("min-inp");
//      const secInp = document.getElementById("sec-inp");

//      const startTimerBtn = document.querySelector("#inputs>button");


//      resetBtn.addEventListener('click', () => {
//           if (!isTimerOn) return;
//           setInputsInTimer();
//           displayTimerValues();
//      })


//      pause_resumeBtn.addEventListener('click', () => {
//           if (!isTimerOn) return;
//           if (isPaused) {
//                startTimer();
//                isPaused = false;
//                pause_resumeBtn.textContent = "Pause";
//           } else {
//                isPaused = true;
//                clearInterval(timer);
//                pause_resumeBtn.textContent = "Resume";
//           }
//      })


//      startTimerBtn.addEventListener("click", () => {
//           setInputsInTimer()
//           if (timerValues.hour < 0 ||
//                timerValues.min < 0 ||
//                timerValues.sec < 0) return;
//           isTimerOn = true; // starting the timer
//           startTimer();
//           toggleDisplay();
//      })



//      function setInputsInTimer() {
//           timerValues.sec = +secInp.value;
//           timerValues.min = +minInp.value;
//           timerValues.hour = +hourInp.value;
//      }

//      function displayTimerValues() {
//           hourDisplay.textContent = timerValues.hour;
//           minDisplay.textContent = timerValues.min;
//           secDisplay.textContent = timerValues.sec;
//      }


//      function startTimer() {
//           displayTimerValues();
//           timer = setInterval(() => {
//                timerValues.sec--;
//                if (timerValues.sec < 0) {
//                     timerValues.sec = 59;
//                     timerValues.min--;
//                }
//                if (timerValues.min < 0) {
//                     timerValues.min = 59;
//                     timerValues.hour--;
//                }

//                displayTimerValues()

//                // Clear the timer after comeback to 00:00:00
//                if (timerValues.hour < 0 ||
//                     timerValues.min < 0 ||
//                     timerValues.sec < 0) {
//                     clearInterval(timer);
//                     isTimerOn = false;
//                     toggleDisplay();
//                }
//           }, 1000)
//      }

//      function toggleDisplay() {
//           if (isTimerOn) {
//                inputs.style.display = "none";
//                display.style.display = "block";
//           } else {
//                inputs.style.display = "grid";
//                display.style.display = "none";
//           }
//      }


// })

document.addEventListener("DOMContentLoaded", () => {
     const SECONDS_IN_MINUTE = 60;
     const MILLISECONDS = 1000;

     let timer;
     let timerValues = {
          hour: 0,
          min: 0,
          sec: 0
     };

     let isTimerOn = false;
     let isPaused = false;

     const display = document.getElementById("display");
     const inputs = document.getElementById("inputs");
     const resetBtn = document.getElementById("reset");
     const pause_resumeBtn = document.getElementById("pause-resume");

     const hourDisplay = document.getElementById("hour");
     const minDisplay = document.getElementById("min");
     const secDisplay = document.getElementById("sec");

     const hourInp = document.getElementById("hour-inp");
     const minInp = document.getElementById("min-inp");
     const secInp = document.getElementById("sec-inp");

     const startTimerBtn = document.querySelector("#inputs>button");

     resetBtn.addEventListener('click', resetTimer);
     pause_resumeBtn.addEventListener('click', togglePauseResume);
     startTimerBtn.addEventListener("click", startButtonClicked);

     function resetTimer() {
          if (!isTimerOn) return;
          setInputsInTimer();
          displayTimerValues();
     }

     function togglePauseResume() {
          if (!isTimerOn) return;
          if (isPaused) {
               resumeTimer();
          } else {
               pauseTimer();
          }
     }

     function resumeTimer() {
          startTimer();
          isPaused = false;
          pause_resumeBtn.textContent = "Pause";
     }

     function pauseTimer() {
          isPaused = true;
          clearInterval(timer);
          pause_resumeBtn.textContent = "Resume";
     }

     function startButtonClicked() {
          setInputsInTimer();
          if (timerValues.hour < 0 || timerValues.min < 0 || timerValues.sec < 0) return;
          isTimerOn = true;
          startTimer();
          toggleDisplay();
     }

     function setInputsInTimer() {
          timerValues.sec = +secInp.value;
          timerValues.min = +minInp.value;
          timerValues.hour = +hourInp.value;
     }

     function displayTimerValues() {
          hourDisplay.textContent = timerValues.hour;
          minDisplay.textContent = timerValues.min;
          secDisplay.textContent = timerValues.sec;
     }

     function startTimer() {
          displayTimerValues();
          timer = setInterval(() => {
               timerValues.sec--;

               if (timerValues.sec < 0) {
                    timerValues.sec = SECONDS_IN_MINUTE - 1;
                    timerValues.min--;

                    if (timerValues.min < 0) {
                         timerValues.min = 59;
                         timerValues.hour--;

                         if (timerValues.hour < 0) {
                              clearInterval(timer);
                              isTimerOn = false;
                              toggleDisplay();
                         }
                    }
               }

               displayTimerValues();
          }, MILLISECONDS);
     }

     function toggleDisplay() {
          inputs.style.display = isTimerOn ? "none" : "grid";
          display.style.display = isTimerOn ? "block" : "none";
     }
});

