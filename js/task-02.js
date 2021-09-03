const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsRef = document.querySelector('#ingredients');


const addIngredient = (array) => array.map(element => {
  const itemOfListEl = document.createElement('li')
  itemOfListEl.textContent = element
  return itemOfListEl
});

ingredientsRef.append(...addIngredient(ingredients))