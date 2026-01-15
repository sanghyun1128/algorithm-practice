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
const map = new Array(n + 2).fill(0).map((e) => new Array(n + 2).fill(0));
for (let i = 1; i <= n; i++) {
  const tmp = input[i].split('').map((e) => Number(e));
  tmp.forEach((e, idx) => {
    map[i][idx + 1] = e;
  });
}

let numOfGroup = 0;
const eachGroupSize = new Array();
const visited = new Array(n + 2).fill(1).map((e) => new Array(n + 2).fill(1));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) visited[i][j] = 0;
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (visited[i][j] !== 0 || map[i][j] === 0) continue;

    eachGroupSize.push(0);
    const stack = new Array([i, j]);
    while (stack.length > 0) {
      const [nodeX, nodeY] = stack.pop();

      if (visited[nodeX][nodeY] !== 0) continue;
      visited[nodeX][nodeY] = numOfGroup + 2;
      eachGroupSize[numOfGroup] += 1;

      if (map[nodeX + 1][nodeY] === 1) stack.push([nodeX + 1, nodeY]);
      if (map[nodeX - 1][nodeY] === 1) stack.push([nodeX - 1, nodeY]);
      if (map[nodeX][nodeY + 1] === 1) stack.push([nodeX, nodeY + 1]);
      if (map[nodeX][nodeY - 1] === 1) stack.push([nodeX, nodeY - 1]);
    }
    numOfGroup += 1;
  }
}

console.log(numOfGroup);
eachGroupSize.sort((a, b) => a - b);
eachGroupSize.forEach((e) => console.log(e));
