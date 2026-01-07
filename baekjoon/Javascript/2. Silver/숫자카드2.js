// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const cardList = input[1].split(' ');
const cardMap = new Map();
cardList.forEach((n) => {
  if (cardMap.has(n)) {
    cardMap.set(n, cardMap.get(n) + 1);
  } else {
    cardMap.set(n, 1);
  }
});

const result = input[3].split(' ').map((n) => {
  if (cardMap.has(n)) {
    return cardMap.get(n);
  } else {
    return 0;
  }
});

console.log(result.join(' '));
