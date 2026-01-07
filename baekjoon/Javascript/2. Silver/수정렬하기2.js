// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const numberList = input.slice(1).map(Number);

numberList.sort((a, b) => a - b);

console.log(numberList.join('\n'));
