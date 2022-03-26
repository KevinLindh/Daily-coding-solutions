/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

https://www.codewars.com/kata/54ff3102c1bad923760001f3
*/

//My solution
function getCount(str) {
  let vowelstr = "aeiou"
  var vowelsCount = 0;
  for(let i=0; i<str.length; i++){
    for(let j=0; j<vowelstr.length; j++){
      if(str[i] === vowelstr[j]){
        vowelsCount++;
      }
    }
  }  
  return vowelsCount;
}
