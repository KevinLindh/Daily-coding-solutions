/*
Description:

In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)

Good luck!
*/

//My solution
function solve(arr){
  let negative = arr.filter(val => val < 0);
  let positive = arr.filter(val => val >= 0);
  if(positive.length > negative.length){
    for(let i = 0; i < positive.length; i++){
      if(negative.indexOf(positive[i]*-1) === -1){
        return positive[i];
      }
    }
  } else {
    for(let i = 0; i < negative.length; i++){
      if(positive.indexOf(negative[i]*-1) === -1){
        return negative[i];
      }
    }
  }
};
