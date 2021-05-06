const refs = {
timer : document.querySelector('.timer')
}

function pad(value) {
  return String(value).padStart(2, '0');
}

const CountdownTimer =  new Date('May 16, 2021').getTime();
const timerInterval = 
setInterval (() => {

const now = new Date().getTime();
let time = CountdownTimer - now;

// * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
// * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
const days = Math.floor(time / (1000 * 60 * 60 * 24));  

//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе

const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

// Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)

const minutes = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

// Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)

const seconds = pad(Math.floor((time % (1000 * 60)) / 1000));

refs.timer.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds ;

    if (time < 0) {
      clearInterval(timerInterval);
      refs.timer.innerHTML = 'TIME IS OVER';
    }
  }, 1000);
