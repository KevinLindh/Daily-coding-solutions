/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

https://www.codewars.com/kata/57a0885cbb9944e24c00008e/javascript
*/

// My solution

function removeExclamationMarks(s) {
  let regex = /!/g;
  return s.replace(regex, "");
}
