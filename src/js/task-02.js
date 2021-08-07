const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.getElementById('ingredients');
let items = ingredients
.map(elm => {
  const li = document.createElement('li');
  li.textContent = elm;
  return li;
})
ingredientsList.append(...items);