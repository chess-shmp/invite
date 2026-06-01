const targetDate =
new Date("2026-03-05T08:00:00").getTime();

const countdown = setInterval(() => {

const now = new Date().getTime();
const distance = targetDate - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

const seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance < 0){
clearInterval(countdown);
}

},1000);

document
.getElementById("openBtn")
.addEventListener("click",function(){

document
.getElementById("opening")
.style.display="none";

const music =
document.getElementById("music");

music.play();

});

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll("section")
.forEach(section => {

section.classList.add("fade");

observer.observe(section);

});
