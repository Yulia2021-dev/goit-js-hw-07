function createBoxes(amount) {
  let boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = 30 + i * 10 + 'px';
    box.style.height = 30 + i * 10 + 'px';
    box.style.backgroundColor = createNewColor();
    boxes.push(box);
  }
    
  return boxes;
}

function createNewColor() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.random() * 255;
  var b = Math.random() * 255;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function generateBoxes() {
  // Paste your code here

  const input = document.getElementsByTagName('input');
  const amount = input[0].value;
  const cols = createBoxes(amount);
  const boxList = document.getElementById('boxes');
  while (boxList.firstChild) {
    boxList.firstChild.remove();
  }
  boxList.append(...cols);
}

function destroyBoxes() {
  
  const boxList = document.getElementById('boxes');
  while (boxList.firstChild) {
    boxList.firstChild.remove();
  }
}

const createBtn = document.querySelector('[data-action="render"]');
const destroyBtn = document.querySelector('[data-action="destroy"]');

createBtn.onclick = generateBoxes;
destroyBtn.onclick = destroyBoxes;

