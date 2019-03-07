/*
URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space
at the end to hold the additional characters,and that you are given the "true" length of the string.
*/

/*
Assumptions:
1. True length isn't needed because javascript has a native method to eliminate whitespaces
*/

const urlify = (string) => {
  // trim outside white spaces of string
  string = string.trim();
  // split string by space
  string = string.split(' ');
  // join string delimited by %20 and return
  return string.join('%20');
};

// "Mr John Smith    " => "Mr%20John%20Smith"

// test cases
const argument = "Mr John Smith    ";
const actual = urlify(argument);
const expected = "Mr%20John%20Smith";
const testName = 'Replaces all spaces in string with %20';

const assertEquals = (actual, expected, testName) => {
  if (actual !== expected) {
    return `ERROR ${testName}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed';
};

const answer = assertEquals(actual, expected, testName);

console.log(answer);
