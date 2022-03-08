/*
Task:

Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land. Some examples for better visualization:
['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO']

or


should return: "Total land perimeter: 24",
while

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']

should return: "Total land perimeter: 18"
Good luck!

https://www.codewars.com/kata/5839c48f0cf94640a20001d3/javascript
*/

//My solution
function landPerimeter(arr) {
  let perimeter = 0;
  for (let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length;j++){
      if (arr[i][j]=== "X"){
      perimeter += 4;
        if(typeof arr[i-1] !== "undefined"){
        if(arr[i-1][j] === "X"){
          perimeter--;
          }
        }
        if(typeof arr[i+1] !== "undefined"){
        if(arr[i+1][j] === "X"){
            perimeter--;
          }
        }
        if(arr[i][j-1] === "X"){
          perimeter--; 
        }
        if(arr[i][j+1] === "X"){
          perimeter--;
        }
      }   
    }
  }
  return `Total land perimeter: ${perimeter}`;
}
