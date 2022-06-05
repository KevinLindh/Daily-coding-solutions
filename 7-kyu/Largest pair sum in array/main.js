/*
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

Input sequence contains minimum two elements and every element is an integer.

https://www.codewars.com/kata/556196a6091a7e7f58000018
*/

//My solution
function largestPairSum (numbers) {
  let biggest = Math.max(...numbers)
  numbers.splice(numbers.indexOf(biggest), 1);
  let second = Math.max(...numbers);
  return biggest + second;
}
