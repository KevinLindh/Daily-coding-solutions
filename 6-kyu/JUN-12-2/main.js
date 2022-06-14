/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647
Examples

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

//My solution
function groupByCommas(n) {
  let count = 1;
  let answer = [];
  let newArr = n.toString().split("");
  for(let i = newArr.length-1; i >= 0; i--){
    if(count%4===0){
      answer.unshift(",");
      count++;
    }
    answer.unshift(newArr[i]);
    count++;
  }
  return answer.join("");
}
