/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

//My solution
function squares(x, n) {
  
  if (n <= 0) {return [];}
  
  let answer = [x];
  
  for(let i = 1; i < n; i++){
    answer.push(answer[i-1] * answer[i-1]);
  }

  return answer;
  
}
