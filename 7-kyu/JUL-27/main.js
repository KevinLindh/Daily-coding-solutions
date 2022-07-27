/*
Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.
Notes

    If the array is null/nil/None or empty you should return empty array ([]).
    The rotten fruit name will be in this camelcase (rottenFruit).
    The returned array should be in lowercase.
*/

//My solution
function removeRotten(bagOfFruits){
  if(!bagOfFruits){
    return [];
  }
  let answer = [];
  for(let i = 0; i < bagOfFruits.length; i++){
    let newArr = bagOfFruits[i].split('');
    for(let j = 0; j < newArr.length; j++){
      if(newArr[j] == newArr[j].toUpperCase()){
        answer.push(newArr.slice(j).join('').toLowerCase())
        break;
      }
      if(j == newArr.length-1){
        answer.push(newArr.join(''))
      }
    }
  }
  return answer
}
