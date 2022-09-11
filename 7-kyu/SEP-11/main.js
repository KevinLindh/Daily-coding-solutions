/*
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d

A few things to note:

    There should be one space in between the two characters
    You don't have to modify the case (i.e. no need to change to upper or lower)
    If one string is longer than the other, there should be a space where the character would be
*/

//My solution
function transposeTwoStrings (array) {
  let longest = 0;
  let answer = "";
  if(array[0].length > array[1].length){
    longest = array[0].length;
  } else {
    longest = array[1].length;
  }
  for(let i = 0; i < longest; i++){
    if(i === longest - 1){
      if(array[0][i] === undefined){
        answer += `  ${array[1][i]}`
      } else if(array[1][i] === undefined){
       answer += `${array[0][i]}  `
      } else {
        answer += `${array[0][i]} ${array[1][i]}`
      }
    } else if(array[0][i] === undefined){
      answer += `  ${array[1][i]}\n`
    } else if(array[1][i] === undefined){
      answer += `${array[0][i]}  \n`
      } else {
        answer += `${array[0][i]} ${array[1][i]}\n`
      }
  }
  return answer;
}
