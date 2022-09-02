/*
Description:

Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.
Examples

remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"
*/

//My solution
function remove (string) {
  let newArr = string.split(" ");
  let answer = [];
  for(let i = 0; i < newArr.length; i++){
    let check = newArr[i].replace(/!/g, "");
    if(newArr[i].length -1 !== check.length){
      answer.push(newArr[i]);
    }
  }
  return answer.join(" ");
}
