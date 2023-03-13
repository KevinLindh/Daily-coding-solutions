/*
An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

Return that number, or -1 if it is impossible.

Good Luck!!!
*/

//My solution
function solve(n) {
  if(n%10 !== 0){
    return -1;
  }
  let answer = 0;
  while(n !== 0){
    if(n >= 500){
      n-=500;
      answer++;
    } else if(n >= 200){
      n-=200;
      answer++;
    } else if(n >= 100){
      n-=100;
      answer++;
    } else if(n >= 50){
      n-=50;
      answer++;
    } else if(n >= 20){
      n-=20;
      answer++;
    } else {
      n-=10;
      answer++;
    }
  }
  return answer;
}
