/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5

For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

//My solution
function encode(string) {
  let newArr = string.split("");
  for(let i=0; i < newArr.length; i++){
    if(newArr[i] === "a"){
      newArr[i] = "1"
    } else if(newArr[i] === "e"){
      newArr[i] = "2"
    } else if(newArr[i] === "i"){
      newArr[i] = "3"
    } else if(newArr[i] === "o"){
      newArr[i] = "4"
    } else if(newArr[i] === "u"){
      newArr[i] = "5"
    }
  }
  return newArr.join("");
}

function decode(string) {
  let newArr = string.split("");
  for(let i=0; i < newArr.length; i++){
    if(newArr[i] === "1"){
      newArr[i] = "a"
    } else if(newArr[i] === "2"){
      newArr[i] = "e"
    } else if(newArr[i] === "3"){
      newArr[i] = "i"
    } else if(newArr[i] === "4"){
      newArr[i] = "o"
    } else if(newArr[i] === "5"){
      newArr[i] = "u"
    }
  }
  return newArr.join("");
}
