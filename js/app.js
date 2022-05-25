import roll from './dice-tower.js';

// TODO: Print sum to the page
// TODO: Add form for adding a text field for `arg`
console.log(roll(4));
console.log(roll([4,6,10]));
console.log(roll('d4'));
console.log(roll('2d6'));

// Invalid
console.log(roll(5));
console.log(roll('d7'));
console.log(roll('5d9'));


