/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

//My solution
function hasUniqueChars(str){
  let newArr = str.split("");
  let compare = [];
  for(let i = 0; i < newArr.length; i++){
    if(compare.indexOf(newArr[i]) !== -1){
      return false
    }
    compare.push(newArr[i]);
  }
  return true
}
