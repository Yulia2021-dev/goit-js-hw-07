const categories = document.getElementById('categories');

console.log('В списке ' + categories.children.length + ' категории');

for (let i = 0; i < categories.children.length; i++) {
  const item = categories.children[i];
  console.log('Категория: ' + item.children[0].innerText)
  console.log('Количество элементов: ' + item.children[1].children.length)
  // const li = document.createElement('li');
  // li.innerHTML = 'Parent';
  // item.children[1].appendChild(li);
}