/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD
*/

//My solution
function alternateCase(s) {
  let result = [];
  let newArr = s.split(' ');
  for(let i = 0; i < newArr.length; i++){
    let words = newArr[i].split('');
    let newWord = '';
    for(let j = 0; j < words.length; j++){
      if(words[j] === words[j].toUpperCase()){
        newWord += words[j].toLowerCase();
      } else {
        newWord += words[j].toUpperCase();
      }
      if(j === words.length - 1){
        result.push(newWord);
      }
    }
  }
  return result.join(' ');
}
