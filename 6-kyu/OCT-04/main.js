/*
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

If you like substring Katas, please try

Longest vowel chain

Alphabet symmetry
*/

//My solution
const BigNumber = require('bignumber.js');
function solve(s){
  let count = 0
  for(let i = 0; i <= s.length; i++){
    for(let j = i+1; j <= s.length; j++){
      let value = new BigNumber(s.slice(i, j));
      if(value.modulo(2)*1 === 1){
        count++;
      }
    }
  }
  return count
};
