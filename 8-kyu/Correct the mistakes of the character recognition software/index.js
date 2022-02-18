/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.

https://www.codewars.com/kata/577bd026df78c19bca0002c0/javascript
*/

// My solution

function correct(string)
{
  let newArr = [];
 for (let i=0; i<string.length; i++){
   if(string[i] == "5"){
     newArr.push("S");
   } else if (string[i] == "0"){
     newArr.push("O");
     } else if (string[i] == "1"){
     newArr.push("I");
     } else {
     newArr.push(string[i]);
     } 
  }
  return newArr.join("");
}
