// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const n = Number(input[0]);
const members = new Array(n);
for (let i = 0; i < n; i++) {
  members[i] = input[i + 1].split(' ').map((e) => Number(e));
}

const rank = new Array(n).fill(1);
for (let j = 0; j < n; j++) {
  for (let k = 0; k < n; k++) {
    if (members[j][0] < members[k][0] && members[j][1] < members[k][1]) {
      rank[j]++;
    }
  }
}

console.log(rank.join(' '));
