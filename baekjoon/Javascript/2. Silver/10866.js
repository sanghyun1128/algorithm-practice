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

class Deque {
  constructor() {
    this.arr = new Array();
    this.size = 0;
  }

  push_front(x) {
    this.arr = [x].concat(this.arr);
    this.size += 1;
  }

  push_back(x) {
    this.arr = this.arr.concat([x]);
    this.size += 1;
  }

  pop_front() {
    if (this.size === 0) return -1;

    const item = this.arr[0];
    this.arr = this.arr.slice(1);
    this.size -= 1;
    return item;
  }

  pop_back() {
    if (this.size === 0) return -1;

    const item = this.arr[this.size - 1];
    this.arr = this.arr.slice(0, this.size - 1);
    this.size -= 1;
    return item;
  }

  empty() {
    if (this.size === 0) return 1;
    return 0;
  }

  front() {
    if (this.size === 0) return -1;

    return this.arr[0];
  }

  back() {
    if (this.size === 0) return -1;

    return this.arr[this.size - 1];
  }
}

const n = input[0];
const output = [];
const deque = new Deque();
for (let i = 1; i <= n; i++) {
  const [cmd, arg] = input[i].split(' ');
  switch (cmd) {
    case 'push_front':
      deque.push_front(arg);
      break;
    case 'push_back':
      deque.push_back(arg);
      break;
    case 'pop_front':
      output.push(deque.pop_front());
      break;
    case 'pop_back':
      output.push(deque.pop_back());
      break;
    case 'size':
      output.push(deque.size);
      break;
    case 'empty':
      output.push(deque.empty());
      break;
    case 'front':
      output.push(deque.front());
      break;
    case 'back':
      output.push(deque.back());
      break;
  }
}
console.log(output.join('\n'));
