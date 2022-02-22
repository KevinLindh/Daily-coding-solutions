/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

https://www.codewars.com/kata/578553c3a1b8d5c40300037c/javascript
*/

//My solution

const binaryArrayToNumber = arr => {
 // 1 2 4 8 16 32 64 128
  let reversed = arr.reverse(arr);
  let count = 0;
  for(let i=1; i<arr.length; i++){
    if(reversed[i]==1){
      count += Math.pow(2,i);
    } else {
    }
  }
  if(reversed[0] == 1){
     count += 1;
    }
  return count;
};
