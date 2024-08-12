import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.show({
  //   title: 'Hey',
  message: 'What would you like to add?',
  messageColor: '#ffffff', // text
  //   messageSize: '25',
  //   color: 'red',
  backgroundColor: 'red',
  closeOnEscape: true,
  position: 'topRight',
  timeout: 20000,
  //   balloon: true,
});
