/*
Task

Given a list of points, construct a graph that includes all of those points and the position (0, 0).

Points will be objects like so: {x: 1, y: -1}.

A graph should be represented as a 2d array.
Example:

Input:
constructGraph([{x: 2, y: 2}, {x: -2, y: -2}])

Output:
[
  [' ', ' ', '|', ' ', '*'],
  [' ', ' ', '|', ' ', ' '],
  ['-', '-', '+', '-', '-'],
  [' ', ' ', '|', ' ', ' '],
  ['*', ' ', '|', ' ', ' '],
]

Points on the graph are represented as '*', and the position (0, 0) is represented by a '+'.

All positions along the x axis should be '-', and all postions along the y axis should be '|'. The rest of the positions should be spaces: ' '.

Also, if a point is on the x or y axis, the default char should be replaced with the point char: '*'.
Example:

Input:
constructGraph([{x: 0, y: 0}, {x: 1, y: 4}]);

Output:
[
  ['|', '*']
  ['|', ' '],
  ['|', ' '],
  ['|', ' '],
  ['*', '-']
]// ^
 //this is (0, 0)

Graphs should be as minimal as posible while still retaining a rectangular shape. They should be just large enough to include all the points and the position (0, 0).

If no points are given, the graph should just include the position (0, 0). Points might have the same value sometimes.
More Examples:

Input:
constructGraph([]);

Output:
[['+']]

Input:
constructGraph([{x: 1, y: 2}, {x: 1, y: 2}]);

Output:
[
  ['|', '*'],
  ['|', ' '],
  ['+', '-']
]

Input:
constructGraph([{x: 0, y: 3}]);

Output:
[
  ['*'],
  ['|'],
  ['|'],
  ['+']
]

Input:
constructGraph([{x: -2, y: -3}, {x: 1, y: -3}]);

Output:
[
  ['-', '-', '+', '-'],
  [' ', ' ', '|', ' '],
  [' ', ' ', '|', ' '],
  ['*', ' ', '|', '*']
]
*/

//My solution
function constructGraph(points) {
    let answer = [];
    let xLower = 0;
    let xUpper = 0;
    let yLower = 0;
    let yUpper = 0;
    for(let i = 0; i < points.length; i++){
      if(points[i]["x"] > xUpper){
        xUpper = points[i]["x"]
      } else if(points[i]["x"] < xLower){
        xLower = points[i]["x"]
      } 
      if(points[i]["y"] > yUpper){
        yUpper = points[i]["y"]
      } else if(points[i]["y"] < yLower){
        yLower = points[i]["y"]
      }
    }
  if(xUpper === 0 && xLower === 0 && yUpper === 0 && yLower === 0 && points.length !== 0){
    return [["*"]];
  } else {
    for(let i = yUpper; i >= yLower; i--){
      let insertArr = [];
      for(let r = xLower; r <= xUpper; r++){
        if(points.some(dot => dot["x"] === r && dot["y"] === i)){
          insertArr.push("*");
        } else if(i === 0 && r === 0){
          insertArr.push("+");
        } else if(i === 0){
          insertArr.push("-");
        } else if(r === 0){
          insertArr.push("|");
        } else {
          insertArr.push(" ");
        }
      }
      answer.push(insertArr);
    }
  return answer;
  }
}
