const countDown = () => {
  const countDate = new Date ('december 7 2022 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now ; 

const seconds = 1000;
const minutes = seconds * 60;
const hour = minutes * 60;
const day = hour * 24;

 const newDate = Math.floor(gap / day);
 const newHour = Math.floor((gap % day) / hour);
 const newMinute = Math.floor((gap % hour) / minutes);
 const newSeconds = Math.floor((gap % minutes) / seconds);


document.querySelector('.days').innerText = newDate;
document.querySelector('.hours').innerText = newHour;
document.querySelector('.minute').innerText = newMinute;
document.querySelector('.seconds').innerText = newSeconds;

}

setInterval (countDown, 1000);







