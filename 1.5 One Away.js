/*
One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or
replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

const oneAway = (string1, string2) => {
  // create edge case for string equality
  if (string1 === string2) return true;
  // create edge case for empty strings
  if (string1.trim() === string2.trim()) return true;
  // initialize 0 to varaible named sameElementForwards
  let sameElementForwards = 0;
  // initialize 0 to varaible named sameElementBackwards
  let sameElementBackwards = 0;
  // loop through string2 forwards
  for (let i = 0; i < string2.length; i++) {
    // match characters
    if (string1[i] === string2[i]) {
      // increase sameElementForwards for match
      sameElementForwards += 1
    }
  }
  // loop through index backwards
  for (let i = 0; i < string2.length; i++) {
    // compare the elements from the ends of string1 and string 2
    if (string1[string1.length - 1 - i] === string2[string2.length - 1 - i]) {
      // increase sameElementBackwards for match
      sameElementBackwards += 1
    }
  }

  // conditional for equality of sameElementForwards and sameElementBackwards
  if (sameElementForwards === sameElementBackwards) {
    // when equal conditional return for string1's length minus the max of sameElementForwards and sameElementBackwards
    // equals to 1
    return string1.length - sameElementForwards === 1;
    //else if
  } else if (string1.length - (sameElementForwards + sameElementBackwards) === 1) {
    // conditional return for string1's length minus sameElementForwards plus sameElementBackwards equals to 1
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

const argument1f = 'abc';
const argument2f = 'abc';
const expected6 = true;
const actual6 = oneAway(argument1f, argument2f);
const testCase6 = 'Returns true of both arguments are the same';

const argument1g = '';
const argument2g = ' ';
const expected7 = true;
const actual7 = oneAway(argument1g, argument2g);
const testCase7 = 'Returns true with empty spaces or empty strings';

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

const answer6 = assertEquals(actual6, expected6, testCase6);
console.log(answer6);

const answer7 = assertEquals(actual7, expected7, testCase7);
console.log(answer7);

/*
Notes:
1. Look for edge cases, there may be repeats of the same letters.
*/
