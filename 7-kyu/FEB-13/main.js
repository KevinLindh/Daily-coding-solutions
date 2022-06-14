/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

// My solution

function squareDigits(num){
  let string = num.toString();
  let newArr = [];
  //split every variable of the number into individual variables (loop)
  for(let i=0; i < string.length; i++){
    //take each variable and get the squareroot of the number
    newArr[i] = string[i] * string[i];
  }
  //join together square root of numbers
  return Number(newArr.join(""));
}
