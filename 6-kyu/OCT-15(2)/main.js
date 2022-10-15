/*
This kata is a harder version of this kata: https://www.codewars.com/kata/5727bb0fe81185ae62000ae3

If you haven't done it yet, you should do that one first before doing this one.

You are given a string of letters that you need to type out. In the string there is a special function: [backspace]. Once you encounter a [backspace] , you delete the character right before it. If there is nothing to backspace , just carry on. Return the final string .

e.g. oopp[backspace]s return oops (delete the p)

Walkthrough:

o
oo
oop
oopp
oop [backspace]
oops

e.g. ooppp[backspace][backspace]s return oops (delete both p's)

Walkthrough:

o
oo
oop
oopp
ooppp
oopp [backspace]
oop [backspace]
oops

e.g. a[backspace][backspace]ooppp[backspace][backspace]s return oops

Walkthrough:

a
[nothing]
[nothing]
o
oo
oop
oopp
ooppp
oopp [backspace]
oop [backspace]
oops

But there's a twist! [backspace][backspace][backspace] can appear as [backspace]*3 or even [backspace]*2[backspace]

Basically, [backspace][backspace] ... [backspace] n times can appear as [backspace]*n (n can even be 1)

e.g. a[backspace]*2oopppp[backspace]*2[backspace]s return oops

Walkthrough:

a
[nothing] [backspace]*2
o
oo
oop
oopp
ooppp
oopppp
oopp [backspace]*2
oop [backspace]
oops

To make it easier, only letters, spaces. and the [backspace] function will be in the initial string.

Good luck!
*/

//My solution
function solve(s) {
  let newS = s.replace(/\[backspace\]/g, "-").replace(/\s/g, '+');
  const answerArr = [];
  const alphabet = ["+"," ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let skip = 0;
  let repeat = "";
  let multiple = 0;
  let newArr = newS.split("");
  for(let i = 0; i < newArr.length; i++){
    let lower = newArr[i].toLowerCase();
    if(alphabet.indexOf(lower) !== -1){
      answerArr.push(newArr[i]);
    } else if(newArr[i] === "-"){
      if(newArr[i+1] === "*"){
        i += 2;
        while(Number(newArr[i]) >= 0){
          repeat += newArr[i];
          multiple = Number(repeat);
          i++;
        }
        i--;
        repeat = "";
        while(answerArr.length > 0 && multiple > 0){
          answerArr.pop();
          multiple--;
        }
      } else {
        if(answerArr.length > 0){
          answerArr.pop();
        }
      }
    }
  }
  return answerArr.join("").split("+").join(" ");
}
