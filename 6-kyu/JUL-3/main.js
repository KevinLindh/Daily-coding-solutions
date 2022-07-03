/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".

The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"

Notes

    The order of letters in the result is not important.
    The letters "zz" transform into "a".
    There will only be lowercase letters.
*/

//My solution
function lastSurvivors(str) {
  let newArr = str.split("");
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"];
  for(let i = 0; i < newArr.length; i++){
    if(newArr.indexOf(newArr[i]) != newArr.lastIndexOf(newArr[i])){
      newArr.splice(newArr.lastIndexOf(newArr[i]), 1);
      newArr[i] = alphabet[alphabet.indexOf(newArr[i]) + 1];
      i = -1;
    }
  }
  return newArr.join("");
}
