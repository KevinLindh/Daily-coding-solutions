/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

https://www.codewars.com/kata/5547929140907378f9000039/javascript
*/

//My solution
function shortcut (string) {
  let vowels = "aeiou"
  return string.split("").filter(element => vowels.indexOf(element) === -1).join("");
}
