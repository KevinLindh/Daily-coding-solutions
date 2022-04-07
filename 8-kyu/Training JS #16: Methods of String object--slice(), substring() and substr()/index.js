/*
Task

Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

https://www.codewars.com/kata/57274562c8dcebe77e001012/javascript
*/

//My solution
function cutIt(arr){
  let shortest = Math.min(...arr.map(element => Number(element.length)));
  return arr.map(element => element.slice(0, shortest));
}
