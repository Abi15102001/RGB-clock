setInterval(()=>{
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let ampm= document.getElementById("ampm");
let svgh = document.getElementById("svghours");
let svgm =document.getElementById("svgminutes");
let svgs = document.getElementById("svgseconds");


let h = new Date().getHours();
let m = new Date() .getMinutes();
let s = new Date() .getSeconds();

let am = h>=12 ? "PM" : "AM";
ampm.innerHTML = am;

 h = (h>12) ? h-12 : h;
 h = (h<10) ? "0"+h : h;
 m = (m<10) ? "0"+ m : m;
 s =(s<10) ? "0" + s : s;
minutes.innerHTML = m;
hours.innerHTML = h;
seconds.innerHTML = s;


svgh.style.strokeDashoffset = 410 -(410*h)/12;
svgm.style.strokeDashoffset = 410 -(410*m)/60;
svgs.style.strokeDashoffset = 410 -(410*s)/60;
});

