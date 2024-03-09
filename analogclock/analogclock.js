let hr = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');

function displaytime(){
const d = new Date;
let hh = d.getHours();
let mm = d.getMinutes();
let ss = d.getSeconds();

let hrotation = 30*hh + mm/2;
let mrotation = 6*mm;
let srotation = 6*ss;

hr.style.transform = `rotate(${hrotation}deg)`;
min.style.transform = `rotate(${mrotation}deg)`;
sec.style.transform = `rotate(${srotation}deg)`;
}
setInterval(displaytime,1000);