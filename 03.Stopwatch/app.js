// let timerInterval;
// let timeoutHandle;
// let totalSeconds = 0;
// let running = false;

// if(localStorage.getItem("stopwatchTime")){
//     totalSeconds = parseInt(localStorage.getItem("stopwatchTime"));
//     updateDisplay();

// }

// function updateDisplay(){
//     let minutes = Math.floor(totalSeconds/60);
//     let seconds = totalSeconds%60;
//     $('#min').text(string(minutes).padStart(2,0));
// }


$(document).ready(function() {
    let startTime;
    let running = false;
    let elapsed = 0;

    // Load saved time from local storage
    if (localStorage.getItem('stopwatchTime')) {
      elapsed = parseInt(localStorage.getItem('stopwatchTime'));
      updateDisplay();
    }

    $('#startStop').click(function() {
      if (running) {
        clearInterval(interval);
        running = false;
        $(this).text('Start');
      } else {
        startTime = Date.now() - elapsed;
        interval = setInterval(updateTimer, 10);
        running = true;
        $(this).text('Stop');
      }
    });

    $('#reset').click(function() {
       clearInterval(interval);
        running = false;
        $('#startStop').text('Start');
        elapsed = 0;
        updateDisplay();
        localStorage.removeItem('stopwatchTime');
    });

    function updateTimer() {
        elapsed = Date.now() - startTime;
        updateDisplay();
        localStorage.setItem('stopwatchTime', elapsed);
      }
  
      function updateDisplay() {
        let milliseconds = elapsed % 1000;
        let seconds = Math.floor(elapsed / 1000) % 60;
        let minutes = Math.floor(elapsed / (1000 * 60)) % 60;
        let hours = Math.floor(elapsed / (1000 * 60 * 60));
  
        let formattedTime = 
          (hours < 10 ? "0" + hours : hours) + ":" +
          (minutes < 10 ? "0" + minutes : minutes) + ":" +
          (seconds < 10 ? "0" + seconds : seconds);
        $('#display').text(formattedTime);
      }
    });
  