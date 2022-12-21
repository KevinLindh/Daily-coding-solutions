/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).
Examples

"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

//My solution
function hexHash(code){
  let sum = 0; 
  for(let i = 0; i < code.length; i++){
    let value = code.charCodeAt(i).toString(16);
    let hexVal = value.split("")
    for(let j = 0; j < hexVal.length; j++){
      if(Number(hexVal[j]) > 0){
        sum += Number(hexVal[j])
      }
    }
  }
  return sum;
}
