/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/

//My solution

function maps(x){
let newArr = [];
  for( let i = 0; i<x.length; i++) { 
  newArr.push(x[i] * 2)
  }
return newArr 
}
