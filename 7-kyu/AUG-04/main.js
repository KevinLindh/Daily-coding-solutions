/*
Write a function which maps a function over the lists in a list:

function gridMap(fn,xss) { return [[]]; }

Example 1:

const xss = [ [1,2,3]
            , [4,5,6]
            ];

gridMap( x => x+1 , xss )  =>  [[2,3,4],[5,6,7]]
gridMap( x => x**2 , xss )  =>  [[1,4,9],[16,25,36]]

Example 2

const xss = [['h','E','l','l','O'],['w','O','r','L','d']];

gridMap( x => x.toUpperCase() , xss )  =>  [['H','E','L','L','O'],['W','O','R','L','D']]
*/

//My solution
function gridMap(fn,a) {
  let answer = [];
  for(let i = 0; i < a.length; i++){
    answer.push(a[i].map(val => fn(val)))
  }
  return answer;
}
