/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.
Examples

"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

//My solution
function cleanString(s) {
  let newArr = s.split("");
  let answer = [];
  for(let i = 0; i < s.length; i++){
    if(newArr[i] === "#"){
      answer.pop();
    } else {
      answer.push(newArr[i]);
    }
  }
  return answer.join("");
}
