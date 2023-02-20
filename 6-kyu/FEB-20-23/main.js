/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

    Empty string values should be ignored.
    Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.

Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->""
*/

//My solution
function formatWords(words){
  if(!words){
    return "";
  } 
  let newArr = words.filter(val => val !== "");
  let answer = "";
  if(newArr.length === 1){
    return newArr[0];
  } else {
    for(let i = 0; i < newArr.length;  i++){
      if(i === 0){
        answer += newArr[i];
        } else if(i !== newArr.length-1){
          answer += ", ";
          answer += newArr[i];
        } else {
          answer += " and ";
          answer += newArr[i];
        }
    }
  }
  return answer
}
