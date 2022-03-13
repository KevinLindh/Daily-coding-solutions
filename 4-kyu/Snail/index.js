/*
Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

This image will illustrate things more clearly:

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript
*/

//My solution
snail = function(array) {
    let newArr = [];
    while(array.length > 0){
      for(i = 0; i<array[0].length; i++){
        newArr.push(array[0][i]);
      }
      array.shift();
      for(let j = 0; j < array.length; j++){
        newArr.push(array[j][array[j].length-1])
        array[j].pop();
      }
      for(let x = array.length-1; x >= 0 ; x--){
        newArr.push(array[array.length-1][x]);
      }
      array.pop();
      for(let y = array.length-1; y >= 0; y--){
          newArr.push(array[y][0]);
          array[y].shift();
      }
    }
    return(newArr);
  }
