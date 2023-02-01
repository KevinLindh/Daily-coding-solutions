/*
Covfefe

Your are given a string. You must replace any occurence of the sequence coverage by covfefe, however, if you don't find the word coverage in the string, you must add covfefe at the end of the string with a leading space.

For the languages where the string is not immutable (such as ruby), don't modify the given string, otherwise this will break the test cases.
*/

//My solution
function covfefe(str){
  let newArr = [str];
  if(str.includes(" ")){
    newArr = str.split(" ");
  }
  let found = false;
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].includes("coverage")){
      found = true;
      newArr[i] = newArr[i].replace(/coverage/g, "covfefe");
    }
  }
  if(!found){
    newArr.push("covfefe");
  }
  return newArr.join(" ");
}
