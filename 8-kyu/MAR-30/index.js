/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
Algorithms

https://www.codewars.com/kata/5b68c7029756802aa2000176
*/

//My solution
function logs(x , a, b){
  return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
}
