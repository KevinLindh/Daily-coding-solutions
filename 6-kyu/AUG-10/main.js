/*
Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.
Example

madam -> True
adamm -> True
junk -> False
Hint

The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

//My solution
function permuteAPalindrome (input) { 
  let obj = {}
  let newArr = input.split("");
  for(let i = 0; i < newArr.length; i++){
    if(!obj[newArr[i]]){
      obj[newArr[i]] = 1;
    } else {
      obj[newArr[i]]++;
    }
  }
  let values = Object.values(obj);
  for(let j = 0; j < values.length; j++){
    if(values[j]%2 === 0){
      values[j] = 0;
    } else {
      values[j] = 1;
    }
  }
  if(newArr.length % 2 === 1){
    return values.reduce((acc, val)=> acc + val, 0) === 1;
  } else {
    return values.reduce((acc, val)=> acc + val, 0) === 0;
  }
}
