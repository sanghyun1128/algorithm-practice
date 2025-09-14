// Setup for reading input for Baekjoon problems
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

class Stack {
  constructor() {
    this.array = [];
    this.topIndex = -1;
  }

  push(newItem) {
    this.array[++this.topIndex] = newItem;
  }
  
  pop() {
    if (this.topIndex === -1) return -1;

    const result = this.array[this.topIndex];
    this.array.length = this.topIndex--;

    return result;
  }

  size() {
    return this.topIndex + 1;
  }

  empty() {
    return this.topIndex === -1 ? 1 : 0;
  }

  top() {
    return this.topIndex === -1 ? -1 : this.array[this.topIndex];
  }
}


const count = parseInt(input[0], 10);
const commands = input.slice(1);

const stack = new Stack();

for (let i = 0; i < count; i++) {
  const [c1, c2] = commands[i].split(' ');
  
  switch (c1) {
    case 'push':
      stack.push(c2);
      break;
    case 'pop':
      console.log(stack.pop());
      break;
    case 'size':
      console.log(stack.size());
      break;
    case 'empty':
      console.log(stack.empty());
      break;
    case 'top':
      console.log(stack.top());
      break;
    default:
      console.log('ERROR');
  }
}