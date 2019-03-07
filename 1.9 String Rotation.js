/*
String Rotation: Assume you have a method isSubstring which checks if one word is a substring of another. Given two
strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g.,"waterbottle"
is a rotation of"erbottlewat").
*/

const stringRotation = (s1, s2) => {
  // create regular expression class with s2 as an argument and initialize it to variable named regExp
  const regExp = new RegExp(s2);
  // Use the RegExp class method test with s1 added to itself
  return regExp.test(s1 + s1);
}

// test cases
const argument1a = 'erbottlewat';
const argument2a = 'waterbottle';
const actual1 = stringRotation(argument1a, argument2a);
const expected1 = true;
const testCase1 = 'Checks if rotation of the first argument if is a valid rotation of the second argument';

const argument1b = 'erbottlewa';
const argument2b = 'waterbottle';
const actual2 = stringRotation(argument1b, argument2b);
const expected2 = false;
const testCase2 = 'Checks if rotation of the first argument if is NOT a valid rotation of the second argument';



const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed';
};

const answer1 = assertEquals(actual1, expected1, testCase1);
console.log(answer1);

const answer2 = assertEquals(actual2, expected2, testCase2);
console.log(answer2);

/*
Notes:
1. The first string can add to itself and then a substring can possibly be found on the second string.
*/

