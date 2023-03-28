/*
You are frantically studying for your exams. To do so you need to frequently visit the library to get your revision time in.

You will be given a string as a parameter letting you know the current time. The passed string will be given in the form:

"Monday 12:35"

Your task is to create a function which lets you know either:

-When the library closes if it is open or,

-When the library opens if it is closed.

If the library is closed and opens later in the current day, you want your return string to say:

"Library opens: today XX:XX"

Where "XX:XX" is the time the library opens in a 24 hour format.

If the library is closed and opens the next day, you want your return string to say:

"Library opens: WEEKDAY XX:XX"

Where "WEEKDAY" is the next day that the library opens.

If the library is open, you want to return:

"Library closes at XX:XX"

Where "XX:XX" is the time that the Library closes.

You can see the opening times of the library below.

Opening Times -
Monday:  08:00 - 20:00 
Tuesday:  08:00 - 20:00
Wednesday:  08:00 - 20:00
Thursday:  08:00 - 20:00
Friday:  08:00 - 20:00
Saturday:  10:00 - 18:00
Sunday:  12:00 - 16:30

Some things to note:

-The string given will always be in the form "WORD XX:XX" Where "X" will always be a digit from 1-9.

-Capitalisation of the passed string should not affect the outcome.

-The time is given in a 24 hour format (your return string should also be in this format).

-If the first word of the passed string is not a weekday or the time is invalid your function should return "Invalid time!".

-The format of your returned weekday should start with a capital, with all other characters in lower case eg Monday.

-The first letter of the returned string should always be a capital.

Examples:

openingTimes("Monday 09:30"); //returns "Library closes at 20:00" 

openingTimes("Saturday 00:00"); //returns "Library opens: today 10:00"

openingTimes("Tuesday 20:00"); //returns "Library opens: Wednesday 08:00"

openingTimes("MoNDay 07:59"); //returns "Library opens: today 08:00"

openingTimes("Tuesday 13:61"); //returns "Invalid time!"

openingTimes("wednsay 12:40"); //returns "Invalid time!"
*/

//My solution
function openingTimes(str) {
  let weekday = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  let open = [8,8,8,8,8,10,12]
  let close = [20,20,20,20,20,18]
  let day = str.split(" ")[0];
  let hour = str.split(" ")[1].split(":")[0];
  let minute = str.split(" ")[1].split(":")[1];
  if(+minute>59 || +hour>24|| +hour === 24){
    return "Invalid time!";
  }
  if(day.toLowerCase() === "sunday"){
    if(+hour < 12 || (+hour === 12 && +minute === 0)){
      return "Library opens: today 12:00";
    } else if(+hour < 16 || (+hour === 16 && +minute < 30)){
      return "Library closes at 16:30";
    } else {
      return "Library opens: Monday 08:00";
    }
  }
  if(+hour < open[weekday.indexOf(day.toLowerCase())]){
    let answer = open[weekday.indexOf(day.toLowerCase())];
    if(answer < 10){
      answer = "0"+answer;
    }
    return `Library opens: today ${answer}:00`
  }
  if(+hour < close[weekday.indexOf(day.toLowerCase())]){
    let answer = close[weekday.indexOf(day.toLowerCase())];
    return `Library closes at ${answer}:00`
  }
  if(+hour >= close[weekday.indexOf(day.toLowerCase())]){
    let answer = open[weekday.indexOf(day.toLowerCase()) + 1];
    let tomorrow = weekday[weekday.indexOf(day.toLowerCase()) + 1]
    if(answer < 10){
      answer = "0"+answer;
    }
    return `Library opens: ${tomorrow[0].toUpperCase()}${tomorrow.substring(1)} ${answer}:00`
  }
  return "Invalid time!";
}
