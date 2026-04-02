// Setup for reading input for Baekjoon problems
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// Setup for reading input from a local file for testing purposes
const input = require('fs')
  .readFileSync(__dirname + '/input.txt')
  .toString()
  .trim()
  .split('\n');

const n = input[0];
const requiredShirts = input[1].split(' ');
const [t, p] = input[2].split(' ');

// 티셔츠 계산
const numOfShirtsGroup = requiredShirts.reduce(
  (acc, cur) => (acc += Math.ceil(cur / t)),
  0,
);

// 팬 계산
const [numOfPenGroup, numOfPen] = [Math.floor(n / p), n % p];

const output = `${numOfShirtsGroup}\n${numOfPenGroup} ${numOfPen}`;

console.log(output);
