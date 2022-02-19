/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/javascript
*/

//My solution

function reverseWords(str) {
  //split each individual words in array
  let oldArr = str.split(" ");
  let newArr = [];
  //loop through array and reverse the values while pushing them into new Array
  for(let i=0; i < oldArr.length; i++){
    newArr.push(oldArr[i].split("").reverse().join(""));
  }
  //join together the reversed words in the new array
  return newArr.join(" ");
}
