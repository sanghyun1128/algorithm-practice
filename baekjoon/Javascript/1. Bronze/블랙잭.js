// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const n = input[0].split(' ')[0];
const m = input[0].split(' ')[1];
const cards = input[1].split(' ').map((e) => Number(e));

let result = m;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      const diff = m - sum;
      if (diff >= 0 && diff <= result) result = diff;
    }
  }
}

console.log(m - result);
