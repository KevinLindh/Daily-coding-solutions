/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

    232
    110011
    54322345

Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

For this kata, single digit numbers are NOT considered numerical palindromes.
Examples

5        =>  false
2121     =>  true
1331     =>  true 
3357665  =>  true 
1294     =>  false 
"109982" =>  "Not valid"
-42      =>  "Not valid"
*/

//My solution
function palindrome(num) {
  if (num !== Number(num) || num < 0){
    return 'Not valid';
  } 
  let count = 0;
  let str = num.toString().split('').sort();
  if (str.length < 2){
    return false;
  } 
  for (let i = 0; i < str.length - 1 ; i++) {
   if (str[i] === str[i + 1]){
     count+=2;
     i++;
     }  
  }
  return (str.length - count) <= 1 ? true : false; 
}
