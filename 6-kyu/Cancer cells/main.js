/*
Your task is to write a function which cuts cancer cells from the body.
Cancer cells are divided into two types:

    Advance stage,described as letter C
    Initial stage,described as letter c

Rest cells are divided as follows:

    Normal cell,described as lowercase letter
    Important cell,described as uppercase letter

Prerequisites:

    Important cell,cannot be cut out.
    Advance cancer cell,should be cut out with adjacent cells if it can be done.

Function input is a string (representing a body), remove "cancer" characters (based on the described rules) and return the body cured of those "cancer" characters.

https://www.codewars.com/kata/5931614bb2f657c18c0001c3
*/

//Solution
function cutCancerCells(organism){
  let newArr = organism.split("");
  let answer = [];
  let index = [];
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i+1] === "C" && newArr[i] !== newArr[i].toUpperCase()){
    } else if(newArr[i].toLowerCase() === "c"){
    } else if(newArr[i-1] === "C" && newArr[i] !== newArr[i].toUpperCase()){
    } else {
      answer.push(newArr[i])
    }
  }
  return answer.join("");
}
