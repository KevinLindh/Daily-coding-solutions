/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
Example

unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
*/

//My solution
function unscrambleEggs(word){
  let newArr = word.split("");
  for(let i = 2; i < newArr.length; i++){
    if(newArr[i-2] === "e" && newArr[i-1] === "g" && newArr[i] === "g"){
      newArr[i-2] = "-";
      newArr[i-1] = "-"; 
      newArr[i] = "-";
    }
  }
  return newArr.join("").split("-").join("");
}
