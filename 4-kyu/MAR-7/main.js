/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

https://www.codewars.com/kata/5324945e2ece5e1f32000370/javascript
*/

//My solution
function sumStrings(a,b) { 
  let sum = BigInt(a)+BigInt(b);
  return sum.toString();
}
