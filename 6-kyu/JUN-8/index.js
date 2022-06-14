/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, 
while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

//My solution
function reverse(str){
  let newArr = str.trim().split(" ");
  for(let i = 0; i < newArr.length; i++){
    if(i%2 === 1){
      newArr[i] = newArr[i].split("").reverse().join("");
    }
  }
  return newArr.join(" ");
}
