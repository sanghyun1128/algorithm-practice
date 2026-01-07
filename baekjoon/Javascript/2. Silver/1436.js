// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs')
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .trim()
//   .split('\n');

const n = Number(input[0]);

const isNumHasDevel = (num) => {
  return String(num).includes('666');
};

let count = 1;
let num = 666;
while (count < n) {
  num += 1;
  if (isNumHasDevel(num)) count += 1;
}

console.log(num);
