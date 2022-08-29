/*
You need count how many valleys you will pass.

Start is always from zero level.

Every time you go down below 0 level counts as an entry of a valley, and as you go up to 0 level from valley counts as an exit of a valley.

One passed valley is equal one entry and one exit of a valley.

s='FUFFDDFDUDFUFUF'
U=UP
F=FORWARD
D=DOWN

To represent string above

(level 1)  __
(level 0)_/  \         _(exit we are again on level 0)
(entry-1)     \_     _/
(level-2)       \/\_/

So here we passed one valley
*/

//My solution
function countingValleys(s) {
  let newArr = s.split("");
  let above = true;
  let level = 0;
  let count = 0;
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === "U"){
      level++;
    } else if(newArr[i] === "D"){
      level--;
    }
    if(above && level < 0){
      count++;
      above = !above;
    } else if(!above && level >= 0){
      count++;
      above = !above;
    }
  }
  return Math.floor(count/2);
}
