import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInputEl = document.querySelector('#datetime-picker');
const btnStartTimer = document.querySelector('.input-button > button');
const deyTimer = document.querySelector('span[data-days]');
const hoursTimer = document.querySelector('span[data-hours]');
const minutesTimer = document.querySelector('span[data-minutes]');
const secondsTimer = document.querySelector('span[data-seconds]');

btnStartTimer.addEventListener('click', startTimer);

btnStartTimer.disabled = true;

let userSelectedDate = 0;
let timeForTimer = 0;

///////////////  flatpickr  //////////////////////////
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };

///////////////  flatpickr  //////////////////////////

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeForTimer = selectedDates[0].getTime() - Date.now();
    if (timeForTimer < 0) {
      btnStartTimer.disabled = true;

      iziToast.error({
        message: 'Please choose a date in the future',
        messageColor: '#ffffff', // text
        backgroundColor: 'red',
        close: false,
        closeOnEscape: true,
        position: 'topRight',
        timeout: 3000,
      });
      return;
    }

    btnStartTimer.disabled = false;
    userSelectedDate = selectedDates[0];
  },
});

function startTimer(event) {
  dateInputEl.disabled = true;
  btnStartTimer.disabled = true;
  console.log(userSelectedDate);

  const timerId = setInterval(() => {
    const time = Date.now();
    const diffTime = userSelectedDate - time;
    console.log(diffTime);

    if (Math.floor(diffTime / 1000) === 0) {
      clearInterval(timerId);
      dateInputEl.disabled = false;

      iziToast.show({
        title: 'Success',
        message: 'Timer is FINISH',
        messageColor: '#f7f7f7',
        titleColor: '#f6f6f6',
        backgroundColor: 'green',
        close: false,
        closeOnEscape: true,
        position: 'topRight',
        timeout: 3000,
      });
    }

    const dataTime = convertMs(diffTime);

    deyTimer.textContent = String(dataTime.days).padStart(2, '0');
    hoursTimer.textContent = String(dataTime.hours).padStart(2, '0');
    minutesTimer.textContent = String(dataTime.minutes).padStart(2, '0');
    secondsTimer.textContent = String(dataTime.seconds).padStart(2, '0');
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
