const baseEl = document.querySelector('.recipe__item--base');
const fruitEl = document.querySelector('.recipe__item--fruit');
const berryEl = document.querySelector('.recipe__item--berries');
const vegEl = document.querySelector('.recipe__item--veg');
const addinEl = document.querySelector('.recipe__item--addin');
const directions = document.querySelector('.recipe__directions');

const basesList = [
  'fresh squeezed fruit juice',
  'coconut water',
  'strong tea (chilled)',
  'milk (dairy or nondairy)',
  'greek yogurt (dairy or nondairy)',
  'vanilla ice cream',
  'vanilla frozen yogurt'
];
const baseSavory = basesList.slice(0, 3);
const baseRandom = basesList.slice(0, 5);

const fruitList = [
  '1/2 cup of cherries',
  '1/2 mango',
  '1/2 cup of pineapple',
  '1 peeled orange',
  '1 kiwi',
  '1 apple (cored)',
  '1 banana',
  '1/2 avocado'
];
const fruitSavory = fruitList.slice(5);
const fruitSweet = fruitList.slice(0, 7);

const berryList = [
  'strawberries',
  'blackberries',
  'blueberries',
  'raspberries',
  'acai berries/puree'
];
const vegList = [
  'spinach',
  'kale',
  'shredded carrot',
  'cucumber',
  'cooked sweet potato',
  'tomato',
  'parsley',
  'bell pepper',
  'cooked beets'
];
const vegSavory = vegList.slice(4);
const vegRandom = vegList.slice(0, 4);

const addinList = [
  '1 scoop of protein powder',
  '1 scoop of almond or peanut butter',
  'A sprinkle of cacao nibs',
  '1 tbsp of chia seeds',
  '1 tbsp of hemp seeds',
  '2 tbsps pistachios',
  'A few shakes of tabasco',
  '1.5 tsp of fresh ginger'
];
const addinSavory = addinList.slice(3);
const addinRandom = addinList.slice(0, 6);

const toastList = ['Cheers', 'Enjoy', 'Bottoms Up'];

//RANDOM ITEM
Array.prototype.randomItem = function() {
  return this[Math.floor(Math.random() * this.length)];
};

//RUN SAVORY SMOOTHIE
document.querySelector('.btn__savory').onclick = function savorySmoothie() {
  baseEl.textContent = `1 cup of ${baseSavory.randomItem()}`;
  fruitEl.textContent = `${fruitSavory.randomItem()}`;
  berryEl.textContent = `1 cup of ${vegSavory.randomItem()}`;
  vegEl.textContent = `1 cup of ${vegRandom.randomItem()}`;
  addinEl.textContent = `${addinSavory.randomItem()}`;
  directions.textContent = `Add ice if desired and blend until smooth. ${toastList.randomItem()}!`;
};

//RUN SWEET SMOOTHIE
document.querySelector('.btn__sweet').onclick = function sweetSmoothie() {
  baseEl.textContent = `1 cup of ${basesList.randomItem()}`;
  fruitEl.textContent = `${fruitSweet.randomItem()}`;
  berryEl.textContent = `1 cup of ${berryList.randomItem()}`;
  vegEl.textContent = `1 cup of ${vegRandom.randomItem()}`;
  addinEl.textContent = `${addinRandom.randomItem()}`;
  directions.textContent = `Add ice if desired and blend until smooth. ${toastList.randomItem()}!`;
};

//RUN RANDOM SMOOTHIE
document.querySelector('.btn__random').onclick = function randomSmoothie() {
  baseEl.textContent = `1 cup of ${baseRandom.randomItem()}`;
  fruitEl.textContent = `${fruitList.randomItem()}`;
  berryEl.textContent = `1 cup of ${berryList.randomItem()}`;
  vegEl.textContent = `1 cup of ${vegRandom.randomItem()}`;
  addinEl.textContent = `${addinRandom.randomItem()}`;
  directions.textContent = `Add ice if desired and blend until smooth. ${toastList.randomItem()}!`;
};
