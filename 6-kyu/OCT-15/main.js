/*
A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid

You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

Notes:

The empty string "" can be read forward or backward the same, it's a palindrome in our case.
*/

//My solution
function palindrome(string) {
  let lowered = string.toLowerCase().replace(".", "");
  let newArr = lowered.split(" ");
  if(newArr.length < 2){
    return true;
  }
  let final = newArr[newArr.length-1].split("");
  for(let i = 0; i < newArr.length-1; i++){
    let word = newArr[i].split("");
    for(let j = 0; j < word.length; j++){
      if(final.indexOf(word[j]) !== -1){
        final.splice(final.indexOf(word[j]), 1);
      }
    }
  }
  return final.length === 0;
}
