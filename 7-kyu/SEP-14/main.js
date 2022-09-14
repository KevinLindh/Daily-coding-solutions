/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

//My solution
function evenLast(numbers) {
  if(numbers.length === 0){
    return 0;
  }
  let even = numbers.filter((val, index)=> index % 2 === 0).reduce((acc, val)=> acc + val , 0);
  return even * numbers[numbers.length - 1];
}
