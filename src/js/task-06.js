const validationInput = document.querySelector('#validation-input');

validationInput.onchange = event => {
  const inputValue = event.currentTarget.value;
  const inputAttr = Number.parseInt(event.currentTarget.getAttribute('data-length'));
  if (inputValue.length === inputAttr) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}



