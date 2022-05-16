/*
The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.

https://www.codewars.com/kata/5ab52526379d20736b00000e
*/

//My solution
function magNumber(info){
  if(info[0] === "PT92"){
    return Math.ceil(3*info[1]/17);
  }
  if(info[0] === "M4A1"){
    return Math.ceil(3*info[1]/30);
  }
  if(info[0] === "M16A2"){
    return Math.ceil(3*info[1]/30);
  }
  if(info[0] === "PSG1"){
    return Math.ceil(3*info[1]/5);
  }
}
