/*
Given a number n and two values firstValue and secondValue, build an array of size n filled with firstValue and secondValue alternating.

for input:                5, true, false
expected result would be: [true, false, true, false, true]

Good luck!
*/

// My solution
function alternate(n, firstValue, secondValue){
  return Array(n).fill().map((val, i)=> i%2===0 ? firstValue : secondValue);
}
