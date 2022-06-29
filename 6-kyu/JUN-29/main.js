/*
Make me a window. I'll give you a number (N). You return a window.

Rules:

The window will always be 2 x 2.

The window needs to have N number of periods across and N number of periods vertically in each pane.

Example:

N = 3

---------
|...|...|
|...|...|
|...|...|
|---+---|
|...|...|
|...|...|
|...|...|
---------

Note: there should be no trailing new line characters at the end.
*/

//My solution
function makeAWindow(num) {
  let result = ""
  let middle = num+1;
  for(let i = 0; i <= num*2+2; i++){
    if(i === 0){
      result += "-".repeat(num*2+3);
    } else if(i === num*2+2){
      result += "\n" + "-".repeat(num*2+3);
    } else if(i === middle){
      result += "\n" + "|" + "-".repeat(num) + "+" + "-".repeat(num) + "|";
    } else {
      result += "\n" + "|" + ".".repeat(num) + "|" + ".".repeat(num) + "|";
    }
  }
    return result;
}
