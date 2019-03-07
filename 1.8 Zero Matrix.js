/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.
*/

const setToZero = (matrix, i, j) => {
  // for loop
  for (let k = 0; k < matrix.length; k += 1) {
    // nested for loop
    for (let l = 0; l < matrix.length; l += 1) {
      // conditional to match row, set to zero
      if (k === i) {
        matrix[k][l] = 0;
      }
      // conditional to match column set to zero
      if (l === j) {
        matrix[k][l] = 0;
      }
    }
  }
  // return matrix
  return matrix
}

const zeroMatrix = (matrix) => {
  // case when matrix is 1x1
  if (matrix.length === 1) return matrix;
  // initialize matrix to variable named answerMatrix and do a deep copy
  let answerMatrix = JSON.parse(JSON.stringify(matrix));
  // loop through matrix
  for (let i = 0; i < matrix.length; i += 1) {
    // nested loop since matrix is MxN
    for (let j = 0; j < matrix.length; j += 1) {
      // find element that is zero
      if (matrix[i][j] === 0) {
        // go to helper function and input answerMatrix and currentIndexes and reassign return to answerMatrix
        answerMatrix = setToZero(answerMatrix, i, j);
      }
    }
  }
  // return answerMatrix
  return answerMatrix;
};

// test cases
const argument1a =
  [
    [0, 1],
    [1, 1]
  ];
const actual1 = zeroMatrix(argument1a);
const expected1 =
  [
    [0, 0],
    [0, 1]
  ];
const testCase1 = 'Sets entire column and row of element where 0 is detected';

const argument2a =
  [
    [1]
  ];
const actual2 = zeroMatrix(argument2a);
const expected2 =
  [
    [1]
  ];
const testCase2 = 'Returns a matrix with length 1';

const argument3a =
  [
    [1, 1],
    [1, 1]
  ];
const actual3 = zeroMatrix(argument3a);
const expected3 =
  [
    [1, 1],
    [1, 1]
  ];
const testCase3 = "Does not modify matrix without 0's";

const argument4a =
  [
    [1, 1, 0],
    [1, 1, 0],
    [1, 1, 1]
  ];
const actual4 = zeroMatrix(argument4a);
const expected4 =
  [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 0]
  ];
const testCase4 = "Can work with a 3x3 matrix";

const assertArrayEquals = (actual, expected, testCase) => {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`
  }
  return 'Passed';
};

const answer1 = assertArrayEquals(actual1, expected1, testCase1);
console.log(answer1);

const answer2 = assertArrayEquals(actual2, expected2, testCase2);
console.log(answer2);

const answer3 = assertArrayEquals(actual3, expected3, testCase3);
console.log(answer3);

const answer4 = assertArrayEquals(actual4, expected4, testCase4);
console.log(answer4)

/*
Notes:
1. Do a deep copy of an array or object by using JSON.stringify() and then following up by JSON.parse().
*/
