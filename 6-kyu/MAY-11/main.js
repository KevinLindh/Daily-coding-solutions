/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord

Don't forget to rate this kata! Thanks :)
*/

//My solution
String.prototype.camelCase=function(){
  let newArr = this.split(" ");
  let answer = newArr.map(val => val.charAt(0).toUpperCase() + val.slice(1));
  return answer.join("");
}
