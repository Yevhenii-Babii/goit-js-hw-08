
const form = document.querySelector('.feedback-form');
console.log(form);


form.addEventListener('input', onFormData);
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

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  const input = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
 
  if (data) {
    input.value = data.email;
    message.value = data.message;
  }
};