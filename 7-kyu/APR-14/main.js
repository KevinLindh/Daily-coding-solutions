/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.
*/

//My solution
function unusedDigits() {
  let newArr = [];
  let numbers = "0123456789";
  let answer = [];
  for(let i=0; i < arguments.length; i++){
    newArr.push(arguments[i]);
  }
  let string = newArr.join("")
  for (let j=0; j < numbers.length; j++){
   if(string.indexOf(numbers[j]) === -1){
     answer.push(numbers[j]);
   }
  }
  return answer.join("");
}
