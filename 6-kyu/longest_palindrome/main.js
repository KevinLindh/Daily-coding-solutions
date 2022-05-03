/*
Longest Palindrome

Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.
Example:

"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0

https://www.codewars.com/kata/54bb6f887e5a80180900046b/javascript
*/

//My solution
longestPalindrome=function(s){
  let longest = 1;
  if(s.length === 0){
    return 0;
  } else {
    for(let i = 0; i < s.length; i++){
    let start = s[i];
    for (let j =i+1; j < s.length; j++){
      start += s[j];
      if(start === start.split("").reverse().join("")){
        if(start.length > longest){
          longest = start.length;
        }
      }
    }
  }
  }
  return longest;
}
