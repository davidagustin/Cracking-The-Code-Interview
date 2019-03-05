/*
Check Permutation: Given two strings,write a method to decide if one is a permutation of the
other.
 */

/*
Assumptions:
1. Characters are in ASCII, not Unicode
2. Characters are all lower case
3. Characters are all in the English Alphabet
4. No spaces are included
 */


const checkPermutation = (string1, string2) => {
  // base case if string lengths do not equal each other
  if (string1.length !== string2.length) return false;
  // create counter array starting with all 0's with length of 26 for each character of the alphabet for string1
  const counterArray1 = new Array(26).fill(0);
  // create counter array starting with all 0's with length of 26 for each character of the alphabet for string2
  const counterArray2 = new Array(26).fill(0);

  // for loop with string1,
  for (let i = 0; i < string1.length; i++) {
    // count characters by incrementing with counter array for string1
    counterArray1[string1[i].charCodeAt(0) - 97] += 1; // 97 is a in ASCII which will be indicate first index
  }
  // for loop with string2,
  for (let i = 0; i < string2.length; i++) {
    // count characters by incrementing with counter array for string2
    counterArray2[string2[i].charCodeAt(0) - 97] += 1; // 97 is a in ASCII which will be indicate first index
  }

  // return boolean comparison of the two joined counter arrays
  return counterArray1.join('') === counterArray2.join('');
};

// string1 = 'abc', string2 = 'cba' => true
// string1 = 'abc', string2 = 'cbd' => false

const argument1 = 'abc';
const argument2 = 'cbd';
const actual = checkPermutation(argument1, argument2);
const expected = false;
const testCase = 'Checks if one string is permutation of the other';

const assertEquals = (input, output, testCase) => {
  if (input !== output) {
    return `ERROR ${testCase}: Expected ${output} but got ${input}`;
  }
  return 'Passed';
};

const answer = assertEquals(actual, expected, testCase);

console.log(answer);

// Notes:
// Ask if case sensitive and if whitespaces are an edge case
// Ask size of character set
// Ask if character set is in ASCII or Unicode


