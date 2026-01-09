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

const k = Number(input[0]);
const calls = new Array(k);
for (let i = 0; i < k; i++) calls[i] = Number(input[i + 1]);

let result = new Array();
result.push(0);

calls.forEach((e) => {
  if (e === 0) result.pop();
  else result.push(e);
});

console.log(result.reduce((acc, cur) => acc + cur, 0));
