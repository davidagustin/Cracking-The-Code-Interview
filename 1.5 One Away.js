/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or
replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

const oneAway = (string1, string2) => {
  // initialize 0 to varaible named sameIndexForward
  let sameIndexForward = 0;
  // initialize 0 to varaible named sameIndexBackwards
  let sameIndexBackwards = 0;
  // split string1 with no delimiter and initalize it to variable characters
  let characters = string1.split('')
  // loop through string2 forwards
  for (let i = 0; i < string2.length; i++) {
    // match characters
    if (string1[i] === string2[i]) {
      // increase sameIndexForward for match
      sameIndexForward += 1
    }
  }
  // loop through index backwards
  for (let i = 0; i < string2.length; i++) {
    // compare the elements from the ends of string1 and string 2
    if (string1[string1.length - 1 - i] === string2[string2.length - 1 - i]) {
      // increase sameIndexBackwards for match
      sameIndexBackwards += 1
    }
  }

  // conditional for equality of sameIndexForward and sameIndexBackwards
  if (sameIndexForward === sameIndexBackwards) {
    // when equal conditional return for string1's length minus the max of sameIndexForward and sameIndexBackwards
    // equals to 1
    return string1.length - sameIndexForward === 1;
    //else if
  } else if (string1.length - (sameIndexForward + sameIndexBackwards) === 1) {
    // conditional return for string1's length minus sameIndexForward plus sameIndexBackwards equals to 1
    return true
    // else
  } else {
    //return false
    return false
  }
};

/*
pale, ple => true
pales, pale => true
pale, bale => true
pale, bae => false
sally, rally => true
*/

// test cases
const argument1a = 'pale';
const argument2a = 'ple';
const expected = true;
const actual = oneAway(argument1a, argument2a);
const testCase = 'Finds one character away for match inbetween second argument';

const argument1b = 'pales';
const argument2b = 'pale';
const expected2 = true;
const actual2 = oneAway(argument1b, argument2b);
const testCase2 = 'Finds a substring that is one character away from match';

const argument1c = 'pale';
const argument2c = 'bale';
const expected3 = true;
const actual3 = oneAway(argument1c, argument2c);
const testCase3 = 'Finds one character in the beginning that is one character away from match';

const argument1d = 'pale';
const argument2d = 'bae';
const expected4 = false;
const actual4 = oneAway(argument1d, argument2d);
const testCase4 = 'Returns false if string2 is not one character away from string1 for a match';

const argument1e = 'sally';
const argument2e = 'rally';
const expected5 = true;
const actual5 = oneAway(argument1e, argument2e);
const testCase5 = 'Can still detect match if both strings have more than one of the same character';


const assertEquals = (actual, expected, testCase) => {
  if (actual !== expected) {
    return `ERROR ${testCase}: Expected ${expected} but got ${actual}`;
  }
  return 'Passed';
}

const answer = assertEquals(actual, expected, testCase);
console.log(answer);

const answer2 = assertEquals(actual2, expected2, testCase2);
console.log(answer2);

const answer3 = assertEquals(actual3, expected3, testCase3);
console.log(answer3);

const answer4 = assertEquals(actual4, expected4, testCase4);
console.log(answer4);

const answer5 = assertEquals(actual5, expected5, testCase5);
console.log(answer5);

/*
Notes:
1. Look for edge cases, there may be repeats of the same letters
*/
