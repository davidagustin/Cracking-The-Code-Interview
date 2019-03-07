/*
String Compression: Implement a method to perform basic string compression using the counts of repeated characters.
For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the
original string, your method should return the original string. You can assume the string has only uppercase and
lowercase letters (a - z).
*/

const stringCompression = (string) => {
  // initialize empty string to varible named currentLetter
  let currentLetter = '';
  // initialize empty string to variable named compressedString
  let compressedString = '';
  // initialize empty string to variable named currentCount
  let currentCount = '';
  // loop string
  for (let i = 0; i < string.length; i += 1) {
    // conditional if last element of string
    if ((string.length - 1) === i) {
      currentCount += 1;
      // concatenate currentLetter with compressedString
      compressedString += currentLetter;
      // concatenate currentCount with compressedString
      compressedString += currentCount;
      // conditional for inequality of currentLetter and element of string
    } else if (currentLetter !== string[i]) {
      // concatenate currentLetter with compressedString
      compressedString += currentLetter;
      // concatenate currentCount with compressedString
      compressedString += currentCount;
      // reassign currentLetter with currentElement
      currentLetter = string[i];
      // reassign currentCount to number 1
      currentCount = 1;
      // else
    } else {
      // increase currentCount by 1
      currentCount += 1
    }
  }
  // return compressedString if smaller than argument
  if (compressedString.length < string.length) {
    return compressedString
  } else {
    // else return argument
    return string
  }
}

// test cases
const argument1a = 'aabcccccaaa';
const actual1 = stringCompression(argument1a);
const expected1 = 'a2b1c5a3';
const testCase1 = 'The string is compressed by repeats of characters'

const argument1b = 'abc';
const actual2 = stringCompression(argument1b);
const expected2 = 'abc';
const testCase2 = 'Returns original string if compressed string is larger'

const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed'
};

const answer1 = assertEquals(actual1, expected1, testCase1);
console.log(answer1);

const answer2 = assertEquals(actual2, expected2, testCase2);
console.log(answer2);

/*
Notes:
1. Check conditional statements.
*/
