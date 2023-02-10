/*
Set Reducer
Intro

These arrays are too long! Let's reduce them!
Description

Write a function that takes in an array of integers from 0-9, and returns a new array:

    Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
    Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4

Example

[0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

[0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

When your function has reduced the array to a single integer following these rules, it should return that integer.

[2] => 2
Rules and assertions

    All test arrays will be 2+ in length
    All integers in the test arrays will be positive numbers from 0 - 9
    You should return an integer, not an array with 1 element
*/

//My solution
function setReducer(input) {
  let same = 0;
  let copy = input.map(val => val);
  while(copy.length !== 1){
    let secondArr = [];
    for(let i = 0; i <= copy.length; i++){
      if(copy[i-1] === copy[i] && i > 0){
        if(same === 0){
          same = 2;
        } else{
          same++;
        }
    } else {
      if(same !== 0){
        secondArr.push(same); 
        same = 0;
      } else{
        if(i !== 0){
        secondArr.push(1); 
        }
      }
      }
    }
    copy = secondArr.map(val => val);
    secondArr = [];
  }
  return copy[0];
}
