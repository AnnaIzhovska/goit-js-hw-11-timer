
const refs = {
    timer: document.getElementById('#timer-1'),
    days: document.querySelector('.value[data-value="days"]'),
    hours: document.querySelector('.value[data-value="hours"]'),
    mins: document.querySelector('.value[data-value="mins"]'),
    secs: document.querySelector('.value[data-value="secs"]'),
  };
  
  class CountdownTimer {
    constructor({ selector, targetDate}) {
      this.selector = selector;
      this.targetDate = targetDate;
    }
    start() {     
      const startTime = this.targetDate.getTime();
      
      setInterval(() => {
        const presentTime = Date.now();   
        const untilTheEndOfTheTimer = startTime - presentTime;
        const time = this.TimeСalculatione(untilTheEndOfTheTimer);
        this.timerUpdate(time);
    },1000);
    }

    pad(value) {
      return String(value).padStart(2, '0');
    }

    TimeСalculatione(time) {
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
      return { days, hours, mins, secs };
    }

  timerUpdate({ days, hours, mins, secs }) {
      refs.days.textContent = `${days}`;
      refs.hours.textContent = `${hours}`;
      refs.mins.textContent = `${mins}`;
      refs.secs.textContent = `${secs}`;
    };
  };
    
  const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('May 20, 2021'),
  });

  timer.start();

  