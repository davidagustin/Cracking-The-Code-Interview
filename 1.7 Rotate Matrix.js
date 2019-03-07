/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to
rotate the image by 90 degrees. Can you do this in place?
*/

/*
Assumptions:
Rotate means rotating a matrix 90 degrees to the right
*/

const rotateMatrix = (matrix) => {
  // initiate for loop
  for (let i = 0; i < matrix.length; i += 1) {
    // initiate nested for loop
    for (let j = 0; j < i; j++) {
      // bitwise operations XOR
      matrix[i][j] ^= matrix[j][i];
      matrix[j][i] ^= matrix[i][j];
      matrix[i][j] ^= matrix[j][i]
    }
  }
  // for loop
  for (let i = 0; i < matrix.length; i += 1) {
    // reverse each row
    matrix[i] = matrix[i].reverse()
  }
  // return matrix
  return matrix
};

// test cases
const argument1a =
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
const actual1 = rotateMatrix(argument1a);
const expected1 =
  [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ];
const testCase1 = 'Function rotates matrix by 90 degrees to the right';

const assertArrayEquals = (actual, expected, testCase) => {
  if ( JSON.stringify(actual) !== JSON.stringify(expected)) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed';
};

const answer1 = assertArrayEquals(actual1, expected1, testCase1);
console.log(answer1);

/*
Notes:
1. Already havd done this problem before
2. When doing assert functions on arrays, remember not to compare them directly.
*/
