const refs = {
timer : document.querySelector('.timer')
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const CountdownTimer =  new Date('May 9, 2021').getTime();
const timerInterval = 
setInterval (() => {

const now = new Date().getTime();
let time = CountdownTimer - now;

const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));  
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

refs.timer.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds ;

    if (time < 0) {
      clearInterval(timerInterval);
      refs.timer.innerHTML = 'TIME IS OVER';
    }
  }, 1000);
