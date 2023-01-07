/*
Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

//My solution
function consonantCount(str) {
  let newArr = str.toLowerCase().split("");
  const consonants = ["a", "e", "i", "o", "u"];
  let lower = str.toLowerCase();
  let amount = 0;
  for(let i = 0; i < newArr.length; i++){
    if(lower.charCodeAt(i) > 97 && lower.charCodeAt(i) < 123 && consonants.indexOf(newArr[i].toLowerCase()) === -1){
      amount++;
    }
  }
  return amount;
}
