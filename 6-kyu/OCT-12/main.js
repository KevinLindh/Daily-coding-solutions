/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g'
*/

//My solution
function stringBreakers(n, string){
  let answer = "";
  let testString = string.split(" ").join("")
  let count = 0;
  while(count + n < testString.length){
    answer += testString.slice(count, count+n) + "\n";
    count += n;
  }
  answer += testString.slice(count, testString.length);
  return answer;
}
