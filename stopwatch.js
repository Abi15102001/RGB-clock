    let swhours = document.getElementById("hours");
    let swminutes = document.getElementById("minutes");
    let swseconds = document.getElementById("seconds");
    let swmilliseconds = document.getElementById("milliseconds");
    let svgh = document.getElementById("svghours");
    let svgm =document.getElementById("svgminutes");
    let svgs = document.getElementById("svgseconds");
    let svgms = document.getElementById("svgmilliseconds");


let swh = 0;
let swm = 0;
 let sws = 0;
 let swms = 0;
let  swrunning = false;
let swinterval;

function addTrailingZero(number) {
  return number < 10 ? "0" + number : number;
}
function stopwatch() {
debugger;        swms++;
        if(swms ===100){
            swms =0;
            sws++;
        }
        if(sws ===60){
            sws =0;
            swm++;
        }
        if(swm ===60){
            swm =0;
            swh++;
        }        
        
        swhours.innerHTML =addTrailingZero(swh);
        swminutes.innerHTML =addTrailingZero(swm);
        swseconds.innerHTML =addTrailingZero(sws);
        swmilliseconds.innerHTML =addTrailingZero(swms);
       
    }
    setInterval(()=>{
    svgh.style.strokeDashoffset = 410 -(410*swh)/12;
    svgm.style.strokeDashoffset = 410 -(410*swm)/60;
    svgs.style.strokeDashoffset = 410 -(410*sws)/60;
    svgms.style.strokeDashoffset = 410 -(410*swms)/100;

    
  });
    
    function startStopwatch() {
        if (!swrunning) {
          swinterval= setInterval(stopwatch, 10);
          swrunning = true;
        }
      }
      
      function stopStopwatch() {
        clearInterval(swinterval);
        swrunning = false;
      }
      
      function resetStopwatch() {
        clearInterval(swinterval);
        swrunning = false;
        swh = 0;
        swm = 0;
        sws = 0;
        swms = 0;
       
        swhours.innerHTML =addTrailingZero(swh);
        swminutes.innerHTML =addTrailingZero(swm);
        swseconds.innerHTML =addTrailingZero(sws);
        swmilliseconds.innerHTML =addTrailingZero(swms);
      }