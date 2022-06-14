/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

// My solution

function removeExclamationMarks(s) {
  let regex = /!/g;
  return s.replace(regex, "");
}
