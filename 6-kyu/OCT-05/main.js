/*
Remove the parentheses

In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes

    Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
    There can be multiple parentheses.
    The parentheses can be nested.
*/

//My solution
function removeParentheses(s){
  let newArr = s.split("");
  let parenthesis = [];
  let answer = ""
  let add = true;
  for(let i = 0; i < newArr.length; i++){
    if(add && newArr[i] !== "("){
      answer += newArr[i];
    }
    if(newArr[i] === "("){
      add = false;
      parenthesis.push(i);
    }
    if(newArr[i] === ")"){
      parenthesis.pop();
    }
    if(parenthesis.length === 0){
      add = true;
    }
  }
  return answer
}
