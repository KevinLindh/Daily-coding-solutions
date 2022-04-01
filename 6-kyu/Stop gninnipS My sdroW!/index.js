/*
Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

https://www.codewars.com/kata/5264d2b162488dc400000001
*/

//My solution
function spinWords(string){
  let newArr = string.split(" ");
  let answer = [];
  for(let i=0; i < newArr.length; i++){
    if(newArr[i].length >= 5){
      answer.push(newArr[i].split("").reverse().join(""))
    } else{
      answer.push(newArr[i]);
    }
  }
  return answer.join(" ");
}
