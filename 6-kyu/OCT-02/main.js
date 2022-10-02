/*
The President's phone is broken

He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.
Kata Task

Decipher the tweet by looking for words with known meanings.

    FIRE = "You are fired!"
    FURY = "I am furious."

If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."
Notes

    The tweet reads left-to-right.
    Any letters not spelling words FIRE or FURY are just ignored
    If multiple of the same words are found in a row then plural rules apply -
    FIRE x 1 = "You are fired!"
    FIRE x 2 = "You and you are fired!"
    FIRE x 3 = "You and you and you are fired!"
    etc...
    FURY x 1 = "I am furious."
    FURY x 2 = "I am really furious."
    FURY x 3 = "I am really really furious."
    etc...

Examples

    ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
    ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
    ex3. FYRYFIRUFIRUFURE = "Fake tweet."
*/

//My solution
var fireAndFury = function(tweet) {
  let answer = [];
  let newArr = [];
  let checkArr = tweet.split("");
  for(let i = 0; i < checkArr.length-3; i++){
    if(checkArr[i]+checkArr[i+1]+checkArr[i+2]+checkArr[i+3] === "FIRE"){
      newArr.push("FIRE");
    } else if(checkArr[i]+checkArr[i+1]+checkArr[i+2]+checkArr[i+3] === "FURY"){
      newArr.push("FURY");
    }
  }
  let repeat = -1;
  let word = newArr[0];
  for(let j=0 ; j < newArr.length; j++){
    if(word === newArr[j]){
      repeat++;
    } else {
      answer.push([word, repeat]);
      word = newArr[j];
      repeat = 0;
    }
    if(j === newArr.length-1){
      answer.push([word, repeat]);
    }
  }
  let other = tweet.replace(/F|I|R|E|U|Y/g, "")
  if(answer.length < 1 || other.length > 0){
    return "Fake tweet."
  }
  for(let i = 0; i < answer.length; i++){
    if(answer[i][0] === "FIRE"){
      let repeater = "and you "
      let insert = repeater.repeat(answer[i][1])
      answer[i] = `You ${insert}are fired!`
    } else {
      let repeater = "really "
      let insert = repeater.repeat(answer[i][1])
      answer[i] = `I am ${insert}furious.`
    }
  }
  return answer.join(" ");
}
