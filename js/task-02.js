const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsItems = items => {
  return items.map(item => {
    const liEl = document.createElement('li');
    liEl.classList.add('item');
    liEl.textContent = item;

    return liEl;
  });
};

const elements = makeIngredientsItems(ingredients);
ingredientsList.append(...elements);

console.log(ingredientsList);