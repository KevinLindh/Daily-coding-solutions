/*
Given a string of numbers, you must perform a method in which you will translate this string into text, based on the below image:

For example if you get "22" return "b", if you get "222" you will return "c". If you get "2222" return "ca".

Further details:

    0 is a space in the string.
    1 is used to separate letters with the same number.
    always transform the number to the letter with the maximum value, as long as it does not have a 1 in the middle. So, "777777" -->  "sq" and "7717777" --> "qs".
    you cannot return digits.
    Given a empty string, return empty string.
    Return a lowercase string.

Examples:

"443355555566604466690277733099966688"  -->  "hello how are you"
"55282"                 -->  "kata"
"22266631339277717777"  -->  "codewars"
"66885551555"           -->  "null"
"833998"                -->  "text"
"000"                   -->  "   "
*/

//My solution
function phoneWords(stringOfNums) {
  let obj = {"11":"", "21":"a", "22":"b", "23":"c", "31":"d", "32":"e", "33":"f", "41":"g", "42":"h", "43":"i", "51":"j", "52":"k", "53":"l", "61":"m", "62":"n", "63":"o", "71":"p", "72":"q", "73":"r", "74":"s", "81":"t", "82":"u", "83":"v", "91":"w", "92":"x", "93":"y", "94":"z", "01":" "}
  let answer = "";
  let newArr = stringOfNums.split("")
  let t = 0;
  let v = "";
  for(let i = 0; i < stringOfNums.length; i++){
    if(t !== 0 && (v !== newArr[i] || v+t === "11" || v+t === "23" || v+t === "33" || v+t === "43" || v+t === "53" || v+t === "63" || v+t === "74" || v+t === "83" || v+t === "94" || v+t === "01")){
      let key = v+t;
      answer += obj[key];
      t = 0;
      v = "";
    }
    v = newArr[i];
    t++;
    if(i === stringOfNums.length-1){
      answer += obj[v+t];
    }
  }
  return answer;
}
