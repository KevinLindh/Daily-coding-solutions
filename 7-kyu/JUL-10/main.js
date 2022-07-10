/*
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^

Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/

//My solution
function calc(x){
  let val0 = "";
  let total1 = 0;
  let total2 = 0;
  let newArr = x.split("");
  for(let i = 0; i < newArr.length; i++){
    val0 += newArr[i].charCodeAt(0);
  }
  let numArr = val0.split("");
  for(let j = 0; j < numArr.length; j++){
    if(numArr[j] == 7){
      total1 += 7;
      total2 += 1;
    } else{
      total1 += Number(numArr[j]);
      total2 += Number(numArr[j]);
    }
  }
  return total1 - total2;
}
