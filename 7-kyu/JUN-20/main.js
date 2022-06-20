/*
 Introduction

The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

The most frequently used key is "GA-DE-RY-PO-LU-KI".

 G => A
 g => a
 a => g
 A => G
 D => E
  etc.

The letters, which are not on the list of substitutes, stays in the encrypted text without changes.
Task

Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.
Input/Output

The input string consists of lowercase and uperrcase characters and white . The substitution has to be case-sensitive.
Example

 encode("ABCD")          // => GBCE 
 encode("Ala has a cat") // => Gug hgs g cgt 
 encode("gaderypoluki"); // => agedyropulik
 decode("Gug hgs g cgt") // => Ala has a cat 
 decode("agedyropulik")  // => gaderypoluki
 decode("GBCE")          // => ABCD
*/

//My solution
function encode(str) {
  let newArr = str.split("");
  for(let i = 0; i < newArr.length; i++){
    switch(newArr[i]){
        case "G":
        newArr[i] = "A";
        break;
        case "g":
        newArr[i] = "a";
        break;
         case "A":
        newArr[i] = "G";
        break;
        case "a":
        newArr[i] = "g";
        break;
         case "D":
        newArr[i] = "E";
        break;
        case "d":
        newArr[i] = "e";
        break;
         case "E":
        newArr[i] = "D";
        break;
        case "e":
        newArr[i] = "d";
        break;
         case "R":
        newArr[i] = "Y";
        break;
        case "r":
        newArr[i] = "y";
        break;
         case "Y":
        newArr[i] = "R";
        break;
        case "y":
        newArr[i] = "r";
        break;
         case "P":
        newArr[i] = "O";
        break;
         case "p":
        newArr[i] = "o";
        break;
        case "O":
        newArr[i] = "P";
        break;
         case "o":
        newArr[i] = "p";
        break;
        case "L":
        newArr[i] = "U";
        break;
         case "l":
        newArr[i] = "u";
        break;
        case "U":
        newArr[i] = "L";
        break;
         case "u":
        newArr[i] = "l";
        break;
         case "K":
        newArr[i] = "I";
        break;
        case "k":
        newArr[i] = "i";
        break;
         case "I":
        newArr[i] = "K";
        break;
        case "i":
        newArr[i] = "k";
        break;
        default:
        break;
    }
  }
  return newArr.join("");
}

function decode(str) {
  let newArr = str.split("");
  for(let i = 0; i < newArr.length; i++){
    switch(newArr[i]){
        case "G":
        newArr[i] = "A";
        break;
        case "g":
        newArr[i] = "a";
        break;
         case "A":
        newArr[i] = "G";
        break;
        case "a":
        newArr[i] = "g";
        break;
         case "D":
        newArr[i] = "E";
        break;
        case "d":
        newArr[i] = "e";
        break;
         case "E":
        newArr[i] = "D";
        break;
        case "e":
        newArr[i] = "d";
        break;
         case "R":
        newArr[i] = "Y";
        break;
        case "r":
        newArr[i] = "y";
        break;
         case "Y":
        newArr[i] = "R";
        break;
        case "y":
        newArr[i] = "r";
        break;
         case "P":
        newArr[i] = "O";
        break;
         case "p":
        newArr[i] = "o";
        break;
        case "O":
        newArr[i] = "P";
        break;
         case "o":
        newArr[i] = "p";
        break;
        case "L":
        newArr[i] = "U";
        break;
         case "l":
        newArr[i] = "u";
        break;
        case "U":
        newArr[i] = "L";
        break;
         case "u":
        newArr[i] = "l";
        break;
         case "K":
        newArr[i] = "I";
        break;
        case "k":
        newArr[i] = "i";
        break;
         case "I":
        newArr[i] = "K";
        break;
        case "i":
        newArr[i] = "k";
        break;
        default:
        break;
    }
  }
    return newArr.join("");   
}
