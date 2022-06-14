/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

doubleChar("String") ==> "SSttrriinngg"

doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ==> "11223344!!__  "
Good Luck!
*/

//My solution
function doubleChar(str) {
  let newArr = [];
  for(let i = 0; i < str.length; i++){
   newArr.push(str[i]+str[i]);
  }
  return newArr.join("");
}
