/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1

nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/

//My solution
function nextBigger(n){
  let newArr = n.toString().split("").map(val=>Number(val))
  let sorted = Number(newArr.map(val=>val).sort((a,b)=>b-a).join(""));
  if(n === sorted || newArr.length === 1){
    return -1;
  }
  let spliced;
  let addOn = [];
  let full = newArr.length;
  outer_Loop:
  for(let i = newArr.length - 2; i < newArr.length-1; i--){
    for(let j = newArr.length-1; j>i; j--){
      if(newArr[j] > newArr[i]){
        let lowest = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = lowest;
        spliced = newArr.splice(i+1);
        break outer_Loop;
      }
    }
  }
  let sortedNew = spliced.sort();
  return Number(([...newArr, ...sortedNew]).join(""))
}
