/*
vowelOne

Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included.

Examples:

vowelOne( "abceios" ) // "1001110"

vowelOne( "aeiou, abc" ) // "1111100100"
*/

//My solution
function vowelOne(s){
  let vowel = ["a", "e", "i", "o", "u"];
  let lower = s.toLowerCase().split("");
  let answer = "";
  for(let i = 0; i < lower.length; i++){
    if(vowel.indexOf(lower[i]) === -1){
      answer += 0;
    } else {
      answer += 1;
    }
  }
  return answer
}
