/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

    the array can't be empty
    only non-negative, single digit integers are allowed

Return nil (or your language's equivalent) for invalid inputs.
Examples

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/

//My solution
function upArray(arr){
  if(arr[arr.length-1] < 0 || arr.length === 0){
    return null;
  }
  arr[arr.length-1] = arr[arr.length-1]+1;
  for(let i = arr.length-1; i >= 0; i--){
    if(arr[i]>10 || arr[i] < 0){
      return null;
    }
    if(arr[i]> 9){
      arr[i] = 0;
      if(i === 0){
        arr.unshift(1);
      } else {
        arr[i-1] += 1;
      }
    }
  }
  return arr;
}
