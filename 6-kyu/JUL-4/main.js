/*
Complete the solution so that it returns true if it contains any duplicate argument values. Any number of arguments may be passed into the function.

The array values passed in will only be strings or numbers. The only valid return values are true and false.

Examples:

solution(1, 2, 3)             -->  false
solution(1, 2, 3, 2)          -->  true
solution('1', '2', '3', '2')  -->  true
*/

//My solution
function solution(){
  let duplicates = [];
  let newArr = Object.values(arguments);
  for(let i = 0; i < newArr.length; i++){
    if(duplicates.indexOf(newArr[i]) != -1){
      return true;
    }
    duplicates.push(newArr[i]);
  }
  return false;
}
