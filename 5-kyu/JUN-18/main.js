/*
You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters.
*/

//My solution
function vowelBack(s){
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let vowels = ["a", "e", "i", "o", "u"];
  let revert = ["c", "o", "d", "e"];
  let first = ["c", "o"];
  let newArr = s.split("");
  let original = s.split("");
  for(let i = 0; i < newArr.length; i++){
    if(first.includes(newArr[i])){
      newArr[i] = alphabet[s.charCodeAt(i)-2-96];
    } else if(newArr[i]=== "d"){
      newArr[i] = "a";
    } else if(newArr[i]=== "e"){
      newArr[i] = "a";
    } else if(newArr[i]=== "u"){
      newArr[i] = "p";
    }else if(vowels.includes(newArr[i])){
     let newVal = s.charCodeAt(i)-5-96;
      if(newVal < 0){
        newArr[i] = alphabet[25 + newVal];
      } else {
        newArr[i] = alphabet[newVal];
      } 
    } else {
        let newVal = (s.charCodeAt(i)+9-97)%26;
        newArr[i] = alphabet[newVal];
      }
  }
  for(let i = 0; i < newArr.length; i++){
    if(revert.includes(newArr[i])){
      newArr[i] = original[i];
    }
  }
  return newArr.join("");
}
