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

const n = Number(input[0].split(' ')[0]);
const m = Number(input[0].split(' ')[1]);
const output = new Array();

const findSeq = (seq) => {
  if (seq.length === m) {
    output.push(seq.join(' '));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (seq.includes(i)) continue;
    seq.push(i);
    findSeq(seq);
    seq.pop();
  }
};

findSeq([]);

console.log(output.join('\n'));
