/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome
is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome
does not need to be limited to just dictionary words.
*/

/*
Assumptions:
1. Function is not case sensitive.
2. Characters are of the english alphabet.
*/

const palindromePermutation = (string) => {
  // initialize empty object variable named counterHash
  let counterHash = {};
  // initialize number variable to 0 named oddCount
  let oddCounter = 0;
  // trim whitespaces on string
  string = string.trim();
  // split the string by space and join the string with no delimiters and make all lowercase
  string = string.split(' ').join('').toLowerCase();
  // check if the length of the string is even or odd
  // if the string has even length
  if (string.length % 2 === 0) {
    // for loop
    for (let i = 0; i < string.length; i += 1) {
      // create counter hash
      counterHash[string[i]] = counterHash[string[i]] + 1 || 1;
    }
    // for in loop
    for (let key in counterHash) {
      // if any value of the key is not % 2 === 0
      if (counterHash[key] % 2 !== 0) {
        //return false
        return false;
      }
    }
  }
  // if the string has odd length
  if (string.length % 2 !== 0) {
    // create for loop
    for (let i = 0; i < string.length; i += 1) {
      // create counter hash
      counterHash[string[i]] = counterHash[string[i]] + 1 || 1;
    }
    // for in loop
    for (let key in counterHash) {
      // if check if there are more than one odd amount characters
      if (oddCounter > 1) {
        // return false
        return false;
      }
      // if there is a value that is odd
      if (counterHash[key] % 2 !== 0) {
        // increase count by 1
        oddCounter += 1;
      }
    }
  }
  // return true
  return true;
};

const palindromePermutationOptimization = (string) => {
  // initialize 0 to variable named oddCount
  let oddCount = 0;
  // trim, split by space, join without delimiters and then put string to lower case
  string = string.trim().split(' ').join('').toLowerCase();
  // create empty bit vector for each lower case character of the alphabet
  let bitVector = new Array(26).fill(0);
  // create empty variable for bitwise subtraction named bitWiseNumber
  let bitwiseNumber;
  // for loop
  for (let i = 0; i < string.length; i += 1) {
    // populate bit vector by odd occurrences
    if (bitVector[string[i].charCodeAt(0) - 97] === 0) {
      // switch element of bitVector to 1 if 0
      bitVector[string[i].charCodeAt(0) - 97] = 1;
      // increase oddCount
      oddCount += 1;
    } else {
      // switch element of bitVector to 0 if 1
      bitVector[string[i].charCodeAt(0) - 97] = 0;
      // decrease oddCount
      oddCount -= 1;
    }
  }
  // return count less than or equal to 1
  return oddCount <= 1;
};

// Tact Coa => True (taco cat, atco cta)
// aaabbb => False (character occurrences cannot have more than one set of odd numbers)

// test cases
const argument = 'Tact Coa';
const expected = true;
const actual = palindromePermutationOptimization(argument);
const testCase = 'Check if string is both a permutation and palindrome';

const argument2 = 'aaabbb';
const actual2 = palindromePermutationOptimization(argument2);
const expected2 = false;
const testCase2 = 'Function returns false if there is more than one set chacracters with odd numbers';

const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed';
};

const answer1 = assertEquals(actual, expected, testCase);
const answer2 = assertEquals(actual2, expected2, testCase2);

console.log(answer1);
console.log(answer2);

/*
Notes:
1. Be careful with the statement "counterHash[string[i]] = counterHash[string[i]] + 1 || 1;" Make sure to use
counterHash[string[i]] + 1 || 1 and NOT counterHash[string[i]] = counterHash[string[i]] += 1 || 1; because it will
return NaN.
2. Beware of boolean statements and double check if it fits the logic of the pseudocode.
*/
