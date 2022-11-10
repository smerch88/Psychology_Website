var throttle = require('lodash.throttle');

const formEl = document.querySelector('.contact__form');
const FORM_KEY = 'feedback-form-state';
formEl.addEventListener('input', throttle(handleInput, 500));
formEl.addEventListener('submit', handleSubmit);

function handleInput(event) {
  let savedData = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};
  const { name, value } = event.target;
  savedData = {
    ...savedData,
    [name]: value,
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(savedData));
}

const renderData = () => {
  let dataToRender = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {}; // оператор нульового злиття

  const inputNames = Object.keys(dataToRender);
  inputNames.forEach(inputName => {
    let input = formEl.elements[inputName];
    let valueKey = 'value';
    input[valueKey] = dataToRender[inputName];
  });
};
renderData();

function handleSubmit(event) {
  event.preventDefault();

  let finalData = {};
  const formData = new FormData(formEl);
  for (const [name, value] of formData.entries()) {
    if (!value) {
      return;
    }
    finalData[name] = value;
  }

  finalData.canBeSpammed = !!finalData.canBeSpammed; // Double NOT (!!)
  localStorage.removeItem(FORM_KEY);
  formEl.reset();
}
