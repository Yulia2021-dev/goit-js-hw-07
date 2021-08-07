const counterValue = document.querySelector('#value')
const incrementBtnEl = document.querySelector('[data-action="increment"]')
const decrementBtnEl = document.querySelector('[data-action="decrement"]')

incrementBtnEl.addEventListener('click', handleIncrementBtnClick)
decrementBtnEl.addEventListener('click', handleDecrementBtnClick)

function handleIncrementBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}

function handleDecrementBtnClick() {
  counterValue.textContent -= 1;
}

