// const categories = document.getElementById('categories');

// console.log('В списке ' + categories.children.length + ' категории');

// for (let i = 0; i < categories.children.length; i++) {
//   const item = categories.children[i];
//   console.log('Категория: ' + item.children[0].textContent)
//   console.log('Количество элементов: ' + item.children[1].children.length)
// }


const categories = document.getElementById('categories');
console.log('В списке ' + categories.children.length + ' категории');

Array.from(categories.children).forEach(item => {
  console.log('Категория: ' + item.children[0].textContent)
  console.log('Количество элементов: ' + item.children[1].children.length)
});

