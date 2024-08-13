import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
console.dir(form);

const execute = event => {
  event.preventDefault();
  // const executeValue = form.elements.state.value;
  const numberEntered = form.elements.delay.value;
  console.log(numberEntered);
  form.reset();
  return new Promise((resolve, reject) => {
    if (numberEntered >= 0) {
      setTimeout(() => {
        if (numberEntered >= 0) {
          resolve(numberEntered);
        } else {
          console.log('ne tot nomer');
        }
      }, numberEntered);
    }
  });
};

form.addEventListener('submit', execute);

/////////////////////////////////////////

// За допомогою prompt запропонуйте користувачу ввести значення.
// Створіть функцію checkValue(value), всередині якої буде Promise
// Якщо введене користувачем значення не є числом, потрібно відхилити проміс і логувати 'error'
// Якщо введене користувачем значення є число і воно парне, розв'язуй проміс і повертай 'even'
// через 1 секунду.
// Якщо введене користувачем значення є число і воно не парне, розв'язуй проміс і повертай 'odd'
// через 2 секунди.

// const value = prompt('Введіть число');
// console.log(value);

// function checkValue(value) {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(value)) {
//       value % 2 === 0
//         ? setTimeout(() => {
//             resolve('парне число');
//           }, 1000)
//         : setTimeout(() => {
//             resolve('не парне число');
//           }, 2000);
//     } else {
//       reject('error');
//     }
//   });
// }

// checkValue(value)
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

///////////////////////////////////////////////

// Створіть функцію delayedPromise, яка приймає час затримки(у мілісекундах)
// та повертає проміс.Цей проміс має виконатися після вказаної затримки і
// вивести повідомлення в консоль "Пройшло delay мілісекунд
// якщо переданий аргумент не є числом логуй повідомлення про помилку
// 'Затримка має бути числом'

// function delayPromise(delay) {
//   return new Promise((resolve, reject) => {
//     if (typeof delay === 'number') {
//       setTimeout(() => {
//         resolve(delay);
//       }, 2000);
//     } else {
//       reject('Нема результату');
//     }
//   });
// }

// delayPromise(2000)
//   .then(delay => {
//     console.log(`Пройшло ${delay} мілісекунд`);
//   })
//   .catch(error => {
//     console.log(error);
//   });

////////////////////////////////////////////////

iziToast.show({
  //   title: 'Hey',
  message: '✅ Fulfilled promise in ${ delay } ms',
  messageColor: '#ffffff', // text
  //   color: 'red',
  backgroundColor: 'red',
  closeOnEscape: true,
  position: 'topRight',
  timeout: 20000,
});

//✅ Fulfilled promise in ${ delay } ms`

//❌ Rejected promise in ${delay}ms`
