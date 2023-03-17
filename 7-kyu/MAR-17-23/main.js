/*
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"

Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/

//My solution
function nameThatNumber(num) {
  let individs = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let overTwenty = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  if(num === 0){
    return "zero";
  } else if(num < 20){
    return individs[num]
  } else {
    if(num%10===0){
      return overTwenty[Math.floor(num/10)-2];
    }
    return overTwenty[Math.floor(num/10)-2] + " " + individs[num%10];
  }
}
