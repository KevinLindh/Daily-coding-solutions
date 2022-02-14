/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

https://www.codewars.com/kata/5552101f47fc5178b1000050/javascript
*/

//My solution

function digPow(n, p){
  let string = n.toString();
  let oldArr = Array.from(String(n), Number);
  let added = 0;
  // p is powerof want to multiply numbers with this
  //increment p for each loop
  for(let i = 0; i < string.length; i++){
    added = added + (oldArr[i]**p);
    p++;
  }
  let divider = added/n;
  // if final value is divisable with a whole number return that number else not return -1
  if(added%n === 0){
    return divider;
  }
  else{
    return -1;
  }
}
