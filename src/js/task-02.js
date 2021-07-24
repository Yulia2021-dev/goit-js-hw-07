const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// function createLi(input) {
//   const li = document.createElement('li');
//   li.innerHTML = input;
//   return li;
// }

const ingredientsList = document.getElementById('ingredients');

// let input = prompt('Enter an ingredient: ');

// while (input !== 'quit') {
//   console.log(input);
//   ingredientsList.appendChild(createLi(input));
//   input = prompt('Enter an ingredient: ');
// }


let items = ingredients
// .filter(el => el.length > 6)
.map(e => {
  const li = document.createElement('li');
  li.innerHTML = e;
  return li;
})
ingredientsList.append(...items);