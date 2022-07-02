/*
Write a function

tripledouble(num1,num2)

which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0
Examples

tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/

//My solution
function tripledouble(num1, num2) {
  let n1Arr = num1.toString().split("");
  let n2Arr = num2.toString().split("")
  let triple = [];
  for(let i = 2; i < n1Arr.length; i++){
    if((n1Arr[i-2] == n1Arr[i-1]) && (n1Arr[i-1] == n1Arr[i])){
      triple.push(n1Arr[i]);
    }
  }
  if(triple.length === 0){
    return 0;
  }
  for(let j = 1; j < n2Arr.length; j++){
    if(n2Arr[j-1] == n2Arr[j]){
      if(triple.includes(n2Arr[j])){
        return 1;
      }
    }
  }
  return 0;
}
