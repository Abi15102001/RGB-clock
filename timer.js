let swhours = document.getElementById("hours");
let swminutes = document.getElementById("minutes");
let swseconds = document.getElementById("seconds");
let swmilliseconds = document.getElementById("milliseconds");
let svgh = document.getElementById("svghours");
let svgm = document.getElementById("svgminutes");
let svgs = document.getElementById("svgseconds");
let svgms = document.getElementById("svgmilliseconds");

let time =0;
let swh = 0;
let swm = 0;
let sws = 0;
let swms = 0;
let swrunning = false;
let swinterval;

setInterval(()=>{
    svgh.style.strokeDashoffset = 410 -(410*swh)/12;
    svgm.style.strokeDashoffset = 410 -(410*swm)/60;
    svgs.style.strokeDashoffset = 410 -(410*sws)/60;
    svgms.style.strokeDashoffset = 410 -(410*swms)/100;

    
  });

function addTrailingZero(number) {
    return number < 10 ? "0" + number : number;
}

function getTime() {
    time = prompt("Enter time in minutes");
    time = time * 60;
    setTime();
  }

  function setTime() {
    swh = Math.floor(time / 3600);
    swm = Math.floor((time % 3600) / 60);
    sws = Math.floor(time % 60);
    swms = 0;

        swhours.innerHTML =addTrailingZero(swh);
        swminutes.innerHTML =addTrailingZero(swm);
        swseconds.innerHTML =addTrailingZero(sws);
        swmilliseconds.innerHTML =addTrailingZero(swms);
  }  

  function timer() {
         swms--;
    if (swms === -1) {
      swms = 99;
      sws--;
    }
    if (sws === -1) {
      sws = 59;
      swm--;
    }
    if (swm === -1) {
      swm = 59;
      swh--;
    }
  
    swhours.innerHTML =addTrailingZero(swh);
    swminutes.innerHTML =addTrailingZero(swm);
    swseconds.innerHTML =addTrailingZero(sws);
    swmilliseconds.innerHTML =addTrailingZero(swms);
  
    timeUp();
  }

  function startTimer() {
    if (swh === 0 && swm === 0 && sws === 0) {
      getTime();
    } else {
      swinterval = setInterval(timer, 10);
      swrunning = true;
    }
  }

  function stopTimer() {
    clearInterval(swinterval);
    swrunning = false;
 }

 function resetTimer() {
    audio.pause();
    stopTimer();
    time = 0;
    setTime();
  }

let audio = new Audio("alarm_clock_beep_beep.mp3");
  function timeUp() {
    if (
      swh === 0 &&
      swm === 0 &&
       sws === 0 &&
      swms === 0
    ) {
      audio.play();  
      stopTimer();
      alert("Time's up!");  
      setTime();
    }
}
