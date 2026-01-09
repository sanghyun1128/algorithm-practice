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

const cardBundle = new Array();
for (let i = 0; i < n; i++) {
  cardBundle.push(i + 1);
}

let front = 0;
while (cardBundle.length - front > 1) {
  front += 1;
  cardBundle.push(cardBundle[front]);
  front += 1;
}

console.log(cardBundle[front]);
