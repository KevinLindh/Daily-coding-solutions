/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

//My solution
function moveTen(s){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let newArr = s.split("");
  for(let i = 0; i < newArr.length; i++){
    newArr[i] = alphabet[alphabet.indexOf(newArr[i]) + 10];
  }
  return newArr.join("");
}
