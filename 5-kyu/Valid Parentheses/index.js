/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100

https://www.codewars.com/kata/52774a314c2333f0a7000688/javascript
*/

// My solution
function validParentheses(parens) {
  let amount = 0;
  for(let i=0;i<parens.length; i++){
      if(parens[i] == "("){
        amount++;
      }
      if(parens[i] == ")"){
        amount--;
      }
      if(amount < 0){
        return false;
      }
    }
      return amount == 0;
  }
