const inputEl = document.querySelector("#font-size-control");
const spanEl = document.getElementById('text')
inputEl.addEventListener("input", onInputRange);
function onInputRange(event) {
    const inputElem = event.target.value;
    spanEl.style.fontSize = `${inputElem}px`;
};

