/*
Remember the game 2048? http://gabrielecirulli.github.io/2048/

The main part of this game is merging identical tiles in a row.

    Implement a function that models the process of merging all of the tile values in a single row.
    This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
    A given tile can only merge once.
    Empty grid squares are represented as zeros.
    Your function should work on arrays containing arbitrary number of elements.

Examples

merge([2,0,2,2])  -->  [4,2,0,0]

Another example with repeated merges:

merge([4,4,8,16])  -->  [8,8,16,0]
merge([8,8,16,0])  -->  [16,16,0,0]
merge([16,16,0,0]) -->  [32,0,0,0]
*/

//My solution
function merge(line) {
  let check = 0;
  let shiftedZ = [];
  let shiftedO = [];
  while (check < line.length){
    if(line[check] == 0){
      shiftedZ.push(0)
    } else {
      shiftedO.push(line[check])
    }
    check++;
  }
  let shifted = shiftedO.concat(shiftedZ);
  for(let i = 1; i < shifted.length; i++){
    if(shifted[i-1] === shifted[i]){
      shifted[i-1] += shifted[i];
      shifted.splice(i, 1);
      shifted.push(0);
    }
  }
  return shifted;
};
