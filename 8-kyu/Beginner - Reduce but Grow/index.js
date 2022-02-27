/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

https://www.codewars.com/kata/57f780909f7e8e3183000078/javascript
*/

// My solution
function grow(x){
 let count = 1
 for(let i=0; i < x.length; i++){
   count *= x[i]
 }
 return count
}
