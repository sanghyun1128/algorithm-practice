// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const numberList = input[1].split(' ');
const numberSet = new Set(numberList);
const result = input[3].split(' ').map((n) => {
  return numberSet.has(n) ? 1 : 0;
});

console.log(result.join('\n'));
