/*
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

//My solution
const removeConsecutiveDuplicates = s =>{
  let words = s.split(" ");
  for(let i = 0; i < words.length; i++){
    if(words[i] === words[i-1]){
      words.splice(i, 1);
      i--;
    }
  }
  return words.join(" ");
}
