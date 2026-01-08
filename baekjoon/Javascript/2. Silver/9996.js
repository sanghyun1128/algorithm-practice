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
const pattern = input[1].split('');
const files = new Array(n);
for (let i = 0; i < n; i++) files[i] = input[i + 2];

const isMatch = (str, pattern) => {
  const starIdx = pattern.indexOf('*');
  const prefix = pattern.slice(0, starIdx).join('');
  const suffix = pattern.slice(starIdx + 1).join('');

  if (prefix.length + suffix.length > str.length) return false;

  if (
    str.indexOf(prefix) === 0 &&
    str.lastIndexOf(suffix) === str.length - suffix.length
  )
    return true;

  return false;
};

files.forEach((e) =>
  isMatch(e, pattern) ? console.log('DA') : console.log('NE'),
);
