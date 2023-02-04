/*
Given a string, return the minimal number of parenthesis reversals needed to make balanced parenthesis.

For example:

solve(")(") = 2 Because we need to reverse ")" to "(" and "(" to ")". These are 2 reversals. 
solve("(((())") = 1 We need to reverse just one "(" parenthesis to make it balanced.
solve("(((") = -1 Not possible to form balanced parenthesis. Return -1.

Parenthesis will be either "(" or ")".

More examples in the test cases.

Good luck.
*/

//My solution
function solve(s){
    if(s.length%2===1){
      return -1;
    }
  let newArr = s.split("");
  let answer = 0; 
  while(newArr.length > 0){
    let curr = newArr.shift();
    if(curr === "(" && newArr.indexOf(")") !== -1){
      newArr.splice(newArr.indexOf(")"), 1);
    } else if(curr === ")" && newArr.indexOf(")") !== -1){
      answer++;
      newArr.splice(newArr.indexOf(")"), 1);
    } else if(curr === "(" && newArr.indexOf("(") !== -1){
      answer++;
      newArr.splice(newArr.indexOf("("), 1);
    } else if(curr === ")" && newArr.indexOf("(") !== -1){
      answer += 2;
      newArr.splice(newArr.indexOf("("), 1);
    }
  }
  return answer + newArr.length;
}
