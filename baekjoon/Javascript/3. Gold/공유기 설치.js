// Setup for reading input for Baekjoon problems
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// Setup for reading input from a local file for testing purposes
// const input = require('fs').readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const [numOfHouse, numOfRouter] = input[0].trim().split(/\s+/).map(Number);

const houseList = input.slice(1).map(Number).sort((a, b) => a - b);

const canPlaceRouters = (gap, targetNumOfRouter, totalNumOfHouse, orderedHouseList) => {
  let lastPlacedIndex = 0;
  let currentIndex = 1;
  let placedCount = 1;
  
  for (let i = 1; i < totalNumOfHouse && placedCount < targetNumOfRouter; i++) {
    if (orderedHouseList[i] - orderedHouseList[lastPlacedIndex] >= gap) {
      lastPlacedIndex = i;
      placedCount++;
    }
  }

  return placedCount >= targetNumOfRouter;
}

let left = 1;
let right = houseList[numOfHouse - 1] - houseList[0];
let answer = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (canPlaceRouters(mid, numOfRouter, numOfHouse, houseList)) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);