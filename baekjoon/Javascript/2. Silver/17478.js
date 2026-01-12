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

const output = new Array();

output.push('어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.');

const recursive = (repeat, prefixLength) => {
  let prefix = '';
  for (let i = 0; i < prefixLength; i++) prefix += '____';

  output.push(prefix + '"재귀함수가 뭔가요?"');
  if (repeat === 0) {
    output.push(prefix + '"재귀함수는 자기 자신을 호출하는 함수라네"');
  } else {
    output.push(
      prefix +
        '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.',
    );
    output.push(
      prefix +
        '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.',
    );
    output.push(
      prefix +
        '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."',
    );
    recursive(repeat - 1, prefixLength + 1);
  }
  output.push(prefix + '라고 답변하였지.');
};

recursive(n, 0);
console.log(output.join('\n'));
