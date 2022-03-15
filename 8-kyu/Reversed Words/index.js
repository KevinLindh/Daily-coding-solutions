/*
Complete the solution so that it reverses all of the words within the string passed in.

Example:

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

https://www.codewars.com/kata/51c8991dee245d7ddf00000e/javascript
*/

// My solution
function reverseWords(str){
 let split = str.split(" ");
  let newArr = [];
  for (let i = 0; i < split.length; i++){
    newArr.unshift(split[i]);
  }
  return newArr.join(" ");
}
