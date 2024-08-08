const formFidbackElem = document.querySelector('.feedback-form');

let formData = { email: '', message: '' };

const getDataToForm = () => {
  const dataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (dataFromLS === null) {
    return;
  }
  for (const key in dataFromLS) {
    if (dataFromLS.hasOwnProperty(key)) {
      formFidbackElem.elements[key].value = dataFromLS[key];
    }
  }
  formData = dataFromLS;
};
getDataToForm();

const addToLS = event => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const submitForm = event => {
  event.preventDefault();

  if (
    formFidbackElem.elements.email.value === '' ||
    formFidbackElem.elements.message.value === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
};
formFidbackElem.addEventListener('input', addToLS);
formFidbackElem.addEventListener('submit', submitForm);
