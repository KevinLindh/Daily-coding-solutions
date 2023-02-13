/*
A new task for you!

    You have to create a method, that corrects a given time string.
    There was a problem in addition, so many of the time strings are broken.
    Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples

"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

//My solution
function timeCorrect(timestring) {
  if(timestring === ""){
    return "";
  }
  if(!timestring || timestring.length !== 8 || timestring.includes(";") || /[a-zA-Z]/g.test(timestring)){
    return null;
  }
  let newArr = timestring.split(":")
  let seconds = +newArr[2];
  let minutes = +newArr[1];
  let hours = +newArr[0];
  if(seconds >= 60){
    minutes += Math.floor(seconds/60);
    seconds = seconds%60;
  }
  if(minutes >= 60){
    hours += Math.floor(minutes/60);
    minutes = minutes%60;
  }
  if(hours >= 24){
    hours = hours%24;
  }
    if(seconds < 10){
      seconds = `0${seconds}`
    }
      if(minutes < 10){
      minutes = `0${minutes}`
    }
  if(hours < 10){
      hours = `0${hours}`
    }
  return `${hours}:${minutes}:${seconds}` 
}
