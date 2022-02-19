/*
Fork|Collect|

Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true

https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/javascript
*/

//My solution

function isDivideBy(number, a, b) {
  if(number%a == 0 && number%b == 0){
    return true;
  } else {
  return false;
  }
}
