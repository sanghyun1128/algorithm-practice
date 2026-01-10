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
const testCases = new Array(n);
for (let i = 0; i < n; i++)
  testCases[i] = [input[(i + 1) * 2 - 1], input[(i + 1) * 2]];

const checkWhenPrint = (length, target, priorities) => {
  const queue = priorities.map((e, idx) => [e, idx]);

  let count = 0;
  while (count < length) {
    let curMax = Math.max(...priorities);
    let front = queue.shift();

    if (front[0] === curMax) {
      count += 1;
      priorities[front[1]] = -1;
      if (front[1] === target) break;
    } else {
      queue.push(front);
    }
  }

  return count;
};

testCases.forEach((e) => {
  const [length, target] = e[0].split(' ').map((e) => Number(e));
  const priorities = e[1].split(' ').map((e) => Number(e));

  console.log(checkWhenPrint(length, target, priorities));
});
