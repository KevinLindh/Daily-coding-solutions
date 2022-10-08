/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

//My solution
function swap (string) {
  const vowels = ["a", "e", "i", "o", "u"]
  let newArr = string.split("");
  return newArr.map(function(val){
    if(vowels.includes(val)){
       return val.toUpperCase();
       } else {
         return val
       }
  }).join("")
}
