/*
Definition

Extra perfect number is the number that first and last bits are set bits.
Task

Given a positive integer N , Return the extra perfect numbers in range from 1 to N .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes

    Number passed is always Positive .

    Returned array/list should contain the extra perfect numbers in ascending order from lowest to highest

Input >> Output Examples

extraPerfect(3)  ==>  return {1,3}

Explanation:
(1)10 =(1)2

First and last bits as set bits.
(3)10 = (11)2

First and last bits as set bits.

extraPerfect(7)  ==>  return {1,3,5,7}

Explanation:
(5)10 = (101)2

First and last bits as set bits.
(7)10 = (111)2

First and last bits as set bits.

https://www.codewars.com/kata/5a662a02e626c54e87000123/solutions/javascript/me/best_practice
*/

//My solution
function extraPerfect(n){
  let answer = []; 
  for(let i = 0; i <= n; i++){
    if(i.toString(2)%2===1){
      answer.push(i);
    }
  }
  return answer;
}
