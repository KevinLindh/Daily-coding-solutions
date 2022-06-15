/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc.

Test examples:

"EBG13 rknzcyr." -->
"ROT13 example."

"This is my first ROT13 excercise!" -->
"Guvf vf zl svefg EBG13 rkprepvfr!"
*/

//My solution
function rot13(str) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let newArr = str.split("");
  for(let i = 0; i < newArr.length; i++){
    if((newArr[i] === newArr[i].toUpperCase()) && alphabet.indexOf(newArr[i].toLowerCase()) != -1){
      newArr[i] = alphabet[(alphabet.indexOf(newArr[i].toLowerCase())+13)%26].toUpperCase();
    } else if (alphabet.indexOf(newArr[i]) != -1){
      newArr[i] = alphabet[(alphabet.indexOf(newArr[i])+13)%26];
    }
  }
  return newArr.join("");
}
