/*
In this Kata, we are going to reverse a string while maintaining the spaces (if any) in their original place.

For example:

solve("our code") = "edo cruo"
-- Normal reversal without spaces is "edocruo". 
-- However, there is a space at index 3, so the string becomes "edo cruo"

solve("your code rocks") = "skco redo cruoy". 
solve("codewars") = "srawedoc"

More examples in the test cases. All input will be lower case letters and in some cases spaces.

Good luck!
*/

//My solution
function solve(str){
  let newArr = [];
  let compare = str.split(" ").map(val => val.length).reverse();
  let noSpaces = str.split(" ").join("");
  let val = noSpaces.length;
  for(let i = compare.length-1; i >= 0; i--){
    newArr.push(noSpaces.slice(val - compare[i], val).split("").reverse().join(""))
    val = val - compare[i];
  }
  return newArr.join(" ");
}
