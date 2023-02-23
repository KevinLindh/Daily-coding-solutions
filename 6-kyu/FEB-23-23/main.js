/*
Write a function that determines whether the passed in sequences are similar. Similar means they contain the same elements, and the same number of occurrences of elements.

var arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]

arraysSimilar(arr1, arr2); // Should equal true
arraysSimilar(arr2, arr3); // Should equal false
arraysSimilar(arr3, arr4); // Should equal false
*/

//My solution
function arraysSimilar(arr1, arr2) {
  let sorted1 = arr1.sort();
  let sorted2 = arr2.sort();
  if(sorted1.length !== sorted2.length){
    return false;
  }
  for(let i = 0; i < sorted2.length; i++){
    if(sorted1[i] !== sorted2[i]){
      return false;
    }
  }
  return true;
}
