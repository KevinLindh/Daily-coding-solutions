/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

//My solution
function solve(arr){
  let copy = arr.map(val => val);
  let answer = [];
  while(copy.length > 1){
    let max = Math.max(...copy);
    let min = Math.min(...copy);
    copy.splice(copy.indexOf(max), 1);
    copy.splice(copy.indexOf(min), 1);
    answer.push(max);
    answer.push(min);
  }
  if(copy.length === 1){
    answer.push(copy[0]);
  }
  return answer;
};
