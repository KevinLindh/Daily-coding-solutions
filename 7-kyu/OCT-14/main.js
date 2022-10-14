/*
You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.
Examples

shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") === 0 // no shifter words
shifter("") === 0 // no shifter words in empty string
*/

//My solution
function shifter(s){
  let amount = 0;
  let compare = ["H", "I", "N", "O", "S", "X", "Z", "W", "M"];
  let seen = [];
  let origin = s.split(" ");
  if(s === ""){
    return 0;
  }
  for(let i = 0; i < origin.length; i++){
    let tester = origin[i].split("");
    for(let j=0; j <= tester.length; j++){
      if(seen.indexOf(origin[i]) !== -1){
        break;
      }
      if(j === tester.length){
        amount++;
        seen.push(origin[i]);
      } else {
        if(compare.indexOf(tester[j]) === -1){
          break;
        }
      }
    }
  }
  return amount;
}
