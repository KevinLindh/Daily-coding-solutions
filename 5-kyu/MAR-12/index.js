/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

// My solution
function humanReadable (seconds) {
  let HH = Math.floor(seconds/60/60);
  seconds -= HH*60*60
  if (HH<10){
    HH = "0" + HH;
  }
  let MM = Math.floor(seconds/60);
  seconds -= MM*60;
  if (MM<10){
     MM = "0" + MM;
  } 
  let SS = seconds;
  if(seconds <10){
    seconds = "0" + seconds;
  }
  return `${HH}:${MM}:${seconds}`
}
