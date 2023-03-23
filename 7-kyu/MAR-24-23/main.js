/*
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true

It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/

//My solution
var mispelled = function(word1, word2){
  let diff = [];
  let newArr1 = word1.split("");
  let newArr2 = word2.split("");
  if(word1 === word2){
    return true;
  } else {
    if(word1.length === word2.length){
      for(let i = 0; i < word1.length-1; i++){
      if(word1[i] !== word2[i]){
        diff.push(word1[i]);
      }
    }
    } else if(word1.length > word2.length){
     if(newArr1[0] !== newArr2[0]){
       newArr1.shift();
     } else if(newArr1[newArr1.length-1] !== newArr2[newArr2.length-1]){
       newArr1.pop();
     } 
      return newArr1.join("") === newArr2.join("");
    } else {
     if(newArr1[0] !== newArr2[0]){
       newArr2.shift();
     }  else if(newArr1[newArr1.length-1] !== newArr2[newArr2.length-1]){
       newArr2.pop();
     } 
      return newArr1.join("") === newArr2.join("");
    }
    return diff.length <= 1;
  }
}
