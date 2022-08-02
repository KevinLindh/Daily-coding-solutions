/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

//My solution
var orderedCount = function (text) {
  let newArr = text.split("");
  let unique = [];
  let obj = {};
  for(let i = 0; i < text.length; i++){
    if(unique.indexOf(newArr[i]) === -1){
      unique.push(newArr[i]);      
    }
    if(!obj[newArr[i]]){
      obj[newArr[i]] = 1;
    } else {
      obj[newArr[i]]++;
    }
  }
  let answer = [];
  for(let j = 0; j < unique.length; j++){
    answer.push([unique[j], obj[unique[j]]])
  }
  return answer;
}
