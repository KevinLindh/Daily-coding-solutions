/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

//My solution
function pigIt(str){
  let newArr = str.split(" ");
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] !== "!" && newArr[i] !== "?" && newArr[i] !== "."){
    let firstLetter = newArr[i].split("").shift();
    newArr[i] = newArr[i].slice(1) + firstLetter + "ay";
      } else{
        
      }
  }
  return newArr.join(" ");
}
