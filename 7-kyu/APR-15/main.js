/*
This time no story, no theory. The examples below show you how to write function accum:
Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//My solution
function accum(s) {
  let newArr = s.toUpperCase().split("");
  let copyArr = s.toLowerCase().split("")
  for(let i = 0; i < newArr.length; i++){
    for(let j = i; j > 0; j--){
      newArr[i] += copyArr[i].toLowerCase();
    }
  }
  return newArr.join("-");
}
