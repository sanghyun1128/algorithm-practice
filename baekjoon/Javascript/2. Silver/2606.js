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

const numOfComputer = Number(input[0]);
const numOfNetwork = Number(input[1]);
const networks = new Array();

for (let i = 0; i < numOfNetwork; i++) {
  networks.push(input[i + 2].split(' ').map((e) => Number(e)));
}

const visited = new Set();
const stack = new Array();
stack.push(1);
while (stack.length > 0) {
  const currentNode = stack.pop();
  visited.add(currentNode);
  networks.forEach((e) => {
    if (e[0] === currentNode && !visited.has(e[1])) stack.push(e[1]);
    if (e[1] === currentNode && !visited.has(e[0])) stack.push(e[0]);
  });
}

console.log(visited.size - 1);
