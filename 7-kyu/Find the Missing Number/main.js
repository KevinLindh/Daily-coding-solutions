/*
This question is a variation on the Arithmetic Progression kata

The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d
*/

//My solution
function missingNo(nums) {
  let sorted = nums.sort((a, b)=> a - b);
  for(let i = 0; i <= 100; i++){
    if(sorted[i] !== i){
      return i;
    }
  }
}
