const counterValue = document.querySelector('#value');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const decrementBtnEl = document.querySelector('[data-action="decrement"]');

incrementBtnEl.onclick = () => counterValue.textContent = Number(counterValue.textContent) + 1;
decrementBtnEl.onclick = () => counterValue.textContent = Number(counterValue.textContent) - 1;

