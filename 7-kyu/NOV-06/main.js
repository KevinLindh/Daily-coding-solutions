/*
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

    instead of including i or I put the number 1 in the password;
    instead of including o or O put the number 0 in the password;
    instead of including s or S put the number 5 in the password.

Examples:

"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
*/

//My solution
function makePassword(phrase) {
  let password = "";
  let newArr = phrase.split(" ");
  for(let i = 0; i < newArr.length; i++){
    let insert = newArr[i][0];
    if(insert === "i" || insert === "I"){
      password += 1;
    } else if(insert === "o" || insert === "O"){
      password += 0;
    } else if(insert === "s" || insert === "S"){
      password += 5;
    } else {
      password += insert;
    }
  }
  return password;
}
