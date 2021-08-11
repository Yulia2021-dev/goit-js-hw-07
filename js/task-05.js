const inputCarrentValue = document.querySelector("#name-input")
const spanCarrentValue = document.querySelector("#name-output")

inputCarrentValue.addEventListener('input', substituteCarrentValue);

function substituteCarrentValue(event) {
  const input = event.currentTarget;
  spanCarrentValue.textContent = input.value ? input.value : 'незнакомец';
  }

