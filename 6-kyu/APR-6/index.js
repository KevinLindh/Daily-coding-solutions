/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
*/

//My solution
function high(x){
  let newArr = x.split(" ");
  let highest = 0;
  let answer = "";
  for(let i=0; i < newArr.length; i++){
    let str = newArr[i];
    let count = 0;
    for(let j=0; j < newArr[i].length; j++){
        count += (str.charCodeAt(j)%96);
      }
    if(count > highest){
      highest = count;
      answer = str;
    }
  }
  return answer;
}
