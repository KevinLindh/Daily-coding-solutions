/*
Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

giveChange(365) // =>  [0,1,1,0,1,3]

In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills.

giveChange(217) // => [2,1,1,0,0,2]
*/

//My solution
function giveChange(amount) {
  let answer = [0, 0, 0, 0, 0, 0]
  while(amount > 0){
    if(amount >= 100){
      amount -= 100;
      answer[5] += 1;
    } else if(amount >= 50){
      amount -= 50;
      answer[4] += 1;
    } else if(amount >= 20){
      amount -= 20;
      answer[3] += 1;
    } else if(amount >= 10){
      amount -= 10;
      answer[2] += 1;
    } else if(amount >= 5){
      amount -= 5;
      answer[1] += 1;
    } else if(amount >= 1){
      amount -= 1;
      answer[0] += 1;
    }
  }
  return answer;
}
