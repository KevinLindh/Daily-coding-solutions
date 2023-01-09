/*
Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

Consonants are letters used in English other than "a", "e", "i", "o", "u". We will count "y" as a consonant.

Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.
Examples

"add" ==> 1
"Dad" ==> 1
"aeiou" ==> 0
"sillystring" ==> 7
"abcdefghijklmnopqrstuvwxyz" ==> 21
"Count my unique consonants!!" ==> 7
*/

//My solution
function countConsonants(str) {
  let obj = {};
  let lower = str.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];
  let newArr = lower.split("");
  let count = 0;
  for(let i = 0; i < newArr.length; i++){
    if(!obj[newArr[i]] && vowels.indexOf(newArr[i]) === -1 &&  lower.charCodeAt(i) > 96 && lower.charCodeAt(i) < 123){
      obj[newArr[i]] = 1;
      count++;
    }
  }
  return count;
}
