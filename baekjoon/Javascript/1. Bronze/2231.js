// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const n = Number(input[0]);
let answer = 0;

const decompositionSum = (num) => {
  let result = num;
  while (num > 0) {
    result += num % 10;
    num = Math.trunc(num / 10);
  }
  return result;
};

const nLength = String(n).length;
for (let i = 9 * nLength; i > 0; i--) {
  if (decompositionSum(n - i) === n) {
    answer = n - i;
    break;
  }
}

console.log(answer);
