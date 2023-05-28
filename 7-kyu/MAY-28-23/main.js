/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

//My solution 
function spacey(array){
  let answer = [array[0]]
  for(let i = 1; i < array.length; i++){
    let prev = answer[answer.length-1];
    answer.push(prev + array[i]);
  }
  return answer;
}
