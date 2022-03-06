/*
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.

https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript
*/

// My solution
function invert(array) {
let newArr = [];
for (let i = 0; i < array.length; i++) {
 newArr.push(array[i] * -1)
}
return newArr;
}
