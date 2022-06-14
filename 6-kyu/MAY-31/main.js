/*
The idea for this kata came from 9gag today:

The lyrics to "Never gonna give you up" by Rick Astley encoded in the NATO phonetic alphabet
Task

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

    There are preloaded dictionary you can use, named NATO
    The set of used punctuation is ,.!?.
    Punctuation should be kept in your return string, but spaces should not.
    Xray should not have a dash within.
    Every word and punctuation mark should be seperated by a space ' '.
    There should be no trailing whitespace
*/

// My solution
function to_nato(words) {
  let answer = ""
  let lower = words.toLowerCase();
  let punctuations = [",", ".", "!", "?"];
  for(let i = 0; i < words.length; i++){
    if(punctuations.indexOf(lower[i])!== -1){
      answer += lower[i] + " ";
    } else if(lower[i].toLowerCase() === lower[i].toUpperCase()){
    } else{
      answer += NATO[lower[i]] + " ";
    }
  }
  return answer.trim();
}
