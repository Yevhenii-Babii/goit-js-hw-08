

var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
onInputSettings()

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

const formData = {};

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmitForm(event) {
  JSON.parse(localStorage.getItem('feedback-form-state'));
  event.preventDefault();
  event.target.reset();
 
  localStorage.removeItem('feedback-form-state');
 
}

function onInputSettings () {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  const email = document.querySelector('input');
  const text = document.querySelector('textarea');
  if (savedMessage) {
    email.value = savedMessage.email;
    text.value = savedMessage.message;
}
}

