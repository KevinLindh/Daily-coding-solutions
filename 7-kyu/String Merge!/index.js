/*
Given two words and a letter, return a single word that's a combination of both words, merged at the point where the given letter first appears in each word. The returned word should have the beginning of the first word and the ending of the second, with the dividing letter in the middle. You can assume both words will contain the dividing letter.
Examples

("hello", "world", "l")       ==>  "held"
("coding", "anywhere", "n")   ==>  "codinywhere"
("jason", "samson", "s")      ==>  "jasamson"
("wonderful", "people", "e")  ==>  "wondeople"

https://www.codewars.com/kata/597bb84522bc93b71e00007e/javascript
*/

//My solution
function stringMerge(string1, string2, letter){
  //get index of the letter in string 1 indexOF
  //splice string1 up until including letter
  //do the same for string2
  let splice1 = string1.split("").indexOf(letter);
  let first = string1.slice(0, splice1);
  let splice2 = string2.split("").indexOf(letter);
  let second = string2.slice(splice2)
  return first + second;
  
}
