var button = document.querySelector('.btn');

button.addEventListener('click', function() {
  function makeSmoothie() {
    var bases = [
      'fresh squeezed fruit juice',
      'coconut water',
      'milk (dairy or nondairy)',
      'chilled tea: green, black, or herbal',
      'yogurt (dairy or nondairy)'
    ];
    var fruits = ['cherries', 'banana', 'mango', 'pineapple', 'avocado'];
    var berries = [
      'strawberries',
      'blackberries',
      'blueberries',
      'raspberries'
    ];
    var vegetables = [
      'spinach',
      'kale',
      'shredded carrot',
      'cucumber',
      'wheat grass'
    ];
    var additives = [
      'protein powder',
      'chia seeds',
      'hemp seeds',
      'almond or peanut butter',
      'cacao nibs'
    ];
    var toasts = ['Cheers', 'Enjoy', 'Bottoms Up'];

    var rand1 = Math.floor(Math.random() * bases.length);
    var rand2 = Math.floor(Math.random() * fruits.length);
    var rand3 = Math.floor(Math.random() * berries.length);
    var rand4 = Math.floor(Math.random() * vegetables.length);
    var rand5 = Math.floor(Math.random() * additives.length);
    var rand6 = Math.floor(Math.random() * toasts.length);

    var smoothie = {
      base: bases[rand1],
      fruit: fruits[rand2],
      berries: berries[rand3],
      vegetable: vegetables[rand4],
      additive: additives[rand5],
      toast: toasts[rand6]
    };
    return smoothie;
  }

  function displaySmoothie(smoothie) {
    document.querySelector(
      '.message'
    ).innerHTML = `Start with ${smoothie.base}. Add some ${smoothie.fruit}, a handful of ${smoothie.berries}, and ${smoothie.vegetable}. 
    Throw in some ice if desired, and blend until smooth. <br>
    If you want an extra boost, add a bit of ${smoothie.additive}. ${smoothie.toast}!`;
  }
  var generateSmoothie = makeSmoothie();
  displaySmoothie(generateSmoothie);
});
