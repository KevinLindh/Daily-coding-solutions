/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript
*/

// My solution

function count (string) {
  let stored = {}
  string.split("").map(i => stored[i] = stored[i]+1 || 1)
  return stored;
}
