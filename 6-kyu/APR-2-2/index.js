/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

//My solution
function solution(str){
  let newArr = [];
  let split = str.split("");
   if(str.length%2 === 0){
     for(let i=0; i<split.length; i+=2){
       newArr.push(split[i] + split[i+1]);
     }
   } else{
     split.push("_")
     for(let i=0; i<split.length; i+=2){
       newArr.push(split[i] + split[i+1]);
     }
   }
  return newArr;
}
