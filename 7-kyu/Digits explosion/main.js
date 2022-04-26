/*
Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
Examples

explode("312")

should return :

"333122"

explode("102269")

should return :

"12222666666999999999"

https://www.codewars.com/kata/585b1fafe08bae9988000314/javascript
*/

//My solution
function explode(s) {
  let newArr = [...s];
  let answer = [];
  for(let i=0; i < s.length; i++){
    answer.push(newArr[i].repeat(newArr[i]));
  }
  return answer.join("");
}
