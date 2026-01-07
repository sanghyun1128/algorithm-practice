// Setup for reading input for Baekjoon problems
const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const count = input[0];

const isVPS = (str) => {
  let stack = 0;
  const strList = str.split('');

  for (const str of strList) {
    if (str === '(') stack += 1;
    else stack -= 1;

    if (stack < 0) return 'NO';
  }

  return stack === 0 ? 'YES' : 'NO';
};

for (let i = 0; i < count; i++) {
  console.log(isVPS(input[i + 1]));
}
