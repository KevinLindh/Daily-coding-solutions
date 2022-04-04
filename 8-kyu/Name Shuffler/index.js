/*
Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"

https://www.codewars.com/kata/559ac78160f0be07c200005a/solutions/javascript
*/

//My solution
function nameShuffler(str){
  return str.split(' ').reverse().join(" ");
}
