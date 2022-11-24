/*
Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):
Then add the letters in a clockwise direction: Then remove the circle:

If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.
Examples:

    encode "codewars" -> "csordaew"
    decode "csordaew" -> "codewars"

    encode "white" -> "wehti"
    decode "wehti" -> "white"
*/

//My solution
function encode(s) {
  let newArr = s.split("");
  let answer = [];
  let i = 0;
  while(newArr.length){
    if(i%2 === 0){
      let insert = newArr.shift();
      answer.push(insert);
    } else {
      let insert = newArr.pop();
      answer.push(insert);
    }
    i++;
  }
  return answer.join("");
}

function decode(s) {
  let newArr = s.split("");
  let first = [];
  let second = [];
  let i = 0;
  while(newArr.length){
    if(i%2 === 0){
      let insert = newArr.shift();
      first.push(insert);
    } else {
      let insert = newArr.shift();
      second.unshift(insert);
    }
    i++;
  }
  return first.join("") + second.join("");
}
