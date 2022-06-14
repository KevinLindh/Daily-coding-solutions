/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

//My solution
function isPangram(string){
  let regex = /[a-z]/g;
  let split = string.toLowerCase().split("");
  let newArr = [];
  for(let i=0; i<string.length; i++){
    if(split[i].match(regex) && newArr.indexOf(split[i]) === -1){
      newArr.push(split[i]);
    }
  }
  return newArr.length === 26;
}
