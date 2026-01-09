// Setup for reading input for Baekjoon problems
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
// Setup for reading input from a local file for testing purposes
// const input = require('fs')
//   .readFileSync(__dirname + '/input.txt')
//   .toString()
//   .trim()
//   .split('\n');

class Stack {
  constructor() {
    this.arr = new Array();
    this.pointer = -1;
  }

  push(x) {
    this.pointer += 1;
    this.arr[this.pointer] = x;
  }

  pop() {
    if (this.pointer === -1) return -1;

    return this.arr[this.pointer--];
  }

  size() {
    return this.pointer + 1;
  }

  empty() {
    if (this.pointer === -1) return 1;
    return 0;
  }

  top() {
    if (this.pointer === -1) return -1;

    return this.arr[this.pointer];
  }
}

const n = Number(input[0]);
const commands = new Array(n);
for (let i = 0; i < n; i++) {
  commands[i] = input[i + 1];
}

const stack = new Stack();
const output = new Array();
commands.forEach((e) => {
  const [cmd, arg] = e.split(' ');

  switch (cmd) {
    case 'push':
      stack.push(Number(arg));
      break;
    case 'pop':
      output.push(stack.pop());
      break;
    case 'size':
      output.push(stack.size());
      break;
    case 'empty':
      output.push(stack.empty());
      break;
    case 'top':
      output.push(stack.top());
      break;
  }
});

console.log(output.join('\n'));
