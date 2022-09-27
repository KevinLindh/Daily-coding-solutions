/*
No description!!!

Input :: [10,20,25,0]

Output :: ["+0", "+10", "+15", "-10"]

Show some love, rank and upvote!
*/

//My solution
function equalize(array){
let answer = [];
  for(let i = 0; i < array.length; i++){
    const pushIt = array[i]-array[0];
    if(pushIt >= 0){
      answer.push(`+${pushIt}`)
    } else {
      answer.push(`${pushIt}`)
    }
  }
  return answer;
}
