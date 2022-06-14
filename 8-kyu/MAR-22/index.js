/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

// My solution
function arrayPlusArray(arr1, arr2) {
  let sum = 0;
  arr1.forEach(x=>sum+=x);
  arr2.forEach(x=>sum+=x);
  return sum;
}
