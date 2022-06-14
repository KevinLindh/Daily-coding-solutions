/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

// My solution

function isIsogram(str){
  let answer = true;
  let newArr = [];
  let stringLowerCase = str.toLowerCase();
  for(let i=0; i<stringLowerCase.length; i++){
    if(newArr.indexOf(stringLowerCase[i]) === -1){
      newArr.push(stringLowerCase[i]);
    } else {
      answer = false;
    }
  }
  return answer;
}
