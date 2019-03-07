/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional
data structures?
*/

const isUnique = (string) => {
  if (string === '') return false;
  // create set
  const uniqueCharacters = new Set;
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // add character to set
    uniqueCharacters.add(string[i]);
  }
  // conditional statement of the lengths of set and string
  return [...uniqueCharacters].length === string.length;
};

// optimization
const isUniqueOptimized = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i])) {
      return false;
    }
  }
  return true;
};

// 'abc' => true
// 'aabc' => false
// '' => false

// test cases
const argument = 'aabc';
const actual = isUniqueOptimized(argument);
const expected = false;
const testCase = 'Determines if string has unique characters';

const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`
  }
  return 'Passed';
};

const answer = assertEquals(actual, expected, testCase);

console.log(answer);

/*
Notes:
1. Ask if string is in ASCII or Unicode.
*/
