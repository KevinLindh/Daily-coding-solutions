/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:

divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

https://www.codewars.com/kata/544aed4c4a30184e960010f4/javascript
*/

//M;y solution
function divisors(integer) {
  let newArr = [];
  for(let i = integer-1; i>1; i--){
    if(integer/i % 1 === 0){
      newArr.unshift(i);
    }else{}
  }
  if(newArr.length === 0){
    return `${integer} is prime`;
  } else{
    return newArr;
    }
};
