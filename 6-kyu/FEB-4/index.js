/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// My solution

var uniqueInOrder=function(iterable){
let newArr = [];
  for (let i=0; i<iterable.length; i++){
    if (newArr.length === 0){
      newArr.push(iterable[i])
    } else if (newArr.lastIndexOf(iterable[i]) === (newArr.length - 1)){
    } else {
      newArr.push(iterable[i])
    }
  }
  return newArr;
}
