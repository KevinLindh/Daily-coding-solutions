/*
Description:

Remove all exclamation marks from the end of sentence.
Examples

remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

https://www.codewars.com/kata/57faece99610ced690000165/javascript
*/

//My solution
function remove (string) {  
  let split = string.split("")
  let final = split.length-1;
  while(split[final] === "!"){
    final--;
  }
  return split.slice(0, final+1).join("");
}
