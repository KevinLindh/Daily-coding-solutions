/*
Your job is to implement a function which returns the last D digits of an integer N as a list.
Special cases:

    If D > (the number of digits of N), return all the digits.
    If D <= 0, return an empty list.

Examples:

N = 1
D = 1
result = [1]

N = 1234
D = 2
result = [3, 4]

N = 637547
D = 6
result = [6, 3, 7, 5, 4, 7]
*/

//My solution
function lastDigit(n, d) {
  let numberArr = n.toString().split("").map(v => Number(v))
  if(d <= 0){
    return [];
  } else if(numberArr.length < d){
    return numberArr;
  } else {
    return numberArr.slice(-d)
  }
}
