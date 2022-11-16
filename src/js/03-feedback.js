
var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

let formData = {};



function onFormData(event) {
  const name = event.target.name
  const value = event.target.value;
  
  formData = {
    ...formData,
    [name]: value,
  }
console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  
}


function onSubmitForm(event) {
  JSON.parse(localStorage.getItem('feedback-form-state'));
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');

   formData = {}
}

function onInputSettings () {
  const savedMessage = JSON.parse(localStorage.getItem('feedback-form-state') ?? {} );

  for (const prop in savedMessage ) {
    if(savedMessage.hasOwnProperty(prop)) {
      form.elements[prop].value = savedMessage[prop];
      formData[prop] = savedMessage[prop]
    }
  }

}

onInputSettings();




