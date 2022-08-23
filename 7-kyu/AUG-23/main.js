/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

//My solution
function switcher(x){
  let obj = {};
  const alphabet = [" ","?","!","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  alphabet.reverse();
  for(let i = 28; i >= 0; i--){
    obj[i+1] = alphabet[i]; 
  }
  let result = "";
  for(let i = 0; i < x.length; i++){
    result += obj[x[i]];
  }
  return result;
}
