/*
Create a function that returns a christmas tree of the correct height.

For example:

height = 5 should return:

    *    
   ***   
  *****  
 ******* 
*********

Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
*/

//My solution
function christmasTree(height) {
  let answer = "";
  for(let i = 0; i < height; i++){
    answer += " ".repeat(height - i-1);
    answer += "*".repeat(i);
    answer += "*";
    answer += "*".repeat(i);
    answer += " ".repeat(height - i-1);
    if(i+1 !== height){
      answer += "\n"
    }
  }
  return answer;
}
