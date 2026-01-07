const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

numbers.sort((a, b) => a - b);
console.log(numbers.join('\n'));
