import roll from './dice-tower.js';

// Valid inputs
console.log('4 ->', roll(4));
console.log('"6" ->', roll('6'));
console.log('[4,6,10] ->', roll([4,6,10]));
console.log('["4","6","10"] ->', roll(["4","6","10"]));
console.log('d4 ->', roll('d4'));
console.log('2d6 ->', roll('2d6'));

// Invalid imputs
console.log('5 ->', roll(5));
console.log('d7 ->', roll('d7'));
console.log('5D9 ->', roll('5D9'));
console.log('whatever ->', roll('whatever'));

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const splitInput = form.hand.value.split(/[, ]+/);

  if (splitInput.length > 1) {
    form.output.value = roll(splitInput);
  } else {
    form.output.value = roll(form.hand.value);
  }
})

