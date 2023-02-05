/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/

//My solution
function sumOfIntegersInString(s){
  let numbers = [];
  let value = "";
  let newArr = s.split("");
  for(let i = 0; i < newArr.length; i++){
    if(+newArr[i] >= 0){
      value += newArr[i];
    } else {
      numbers.push(+value);
      value = "";
    }
    if(i === newArr.length-1 && value.length > 0){
      numbers.push(+value);
    }
  }
  return numbers.reduce((acc, val)=> acc + val, 0);
}
