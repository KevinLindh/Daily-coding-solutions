/*
You will get an odd integer n (>= 3) and your task is to draw an X. Each line is separated with \n.

Use the following characters: ■ □ For Ruby, Crystal and PHP: whitespace and o
Examples


                                     ■□□□■
            ■□■                      □■□■□
  x(3) =>   □■□             x(5) =>  □□■□□
            ■□■                      □■□■□
                                     ■□□□■
*/

//My solution
function x(n){
  let answer = "";
  for(let i = 0; i < n; i++){
    let original = "□".repeat(n);
    let newArr = original.split("");
    newArr[i] = "■";
    newArr[(newArr.length-1)-i] = "■";
    let ans = newArr.join("");
    answer += ans;
    if(i != n-1){
      answer += "\n";
    }
  }
  return answer;
}
