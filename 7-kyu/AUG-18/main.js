/*
Write function which takes a string and make an acronym of it.

Rule of making acronym in this kata:

    split string to words by space char
    take every first letter from word in given string
    uppercase it
    join them toghether

Eg:

Code wars -> C, w -> C W -> CW
*/

//My solution 
function toAcronym(inp){
  let newArr = inp.split(" ");
  let answer = "";
  for(let i = 0; i < newArr.length; i++){
    answer += newArr[i][0].toUpperCase();
  }
  return answer;
}
