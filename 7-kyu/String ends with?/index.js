/*

Title: 
  "String ends with?"

  Description:
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
    
  Examples: 
    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
    
   Kata Link:
   https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
    
*/

//My Solution

function solution(str, ending){
let strEnding = str.slice(str.length-ending.length, str.length)
if (ending == strEnding){
   return true
 } else {return false}   
}
