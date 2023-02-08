/*
Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}

should be converted into

[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]

Note: The output array should be sorted alphabetically by key name.

Good Luck!
*/

//My solution
function convertHashToArray(hash){
  let answer = [];
  const keys = Object.keys(hash);
  for(let i = 0; i < keys.length; i++){
    answer.push([keys[i], hash[keys[i]]]); 
  }
  return answer.sort(([a], [b])=> a.localeCompare(b));
}
