/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!

https://www.codewars.com/kata/5263c6999e0f40dee200059d/javascript
*/

// My solution
function getPINs(observed) {
  let potentialArr = [];
    for(let i = 0; i< observed.length; i++){
        let arr = observed[i];
        switch (arr){
            case "1":
            potentialArr.push("124");  
            break;
            case "2":
            potentialArr.push("1235");  
            break;
            case "3":
            potentialArr.push("236");  
            break;
            case "4":
            potentialArr.push("1457");  
            break;
            case "5":
            potentialArr.push("24568");  
            break;
            case "6":
            potentialArr.push("3569");  
            break;
            case "7":
            potentialArr.push("478");  
            break;
            case "8":
            potentialArr.push("57890");  
            break;
            case "9":
            potentialArr.push("689");  
            break;
            case "0":
            potentialArr.push("80");  
            break;
        }
    }
 let newArr = [];
      for(let q = 0; q < potentialArr[0].length; q++){
        if(observed.length < 2){
          newArr.push(potentialArr[0][q])
          } else{
          for (let w = 0; w<potentialArr[1].length; w++){
            if(observed.length < 3){
              newArr.push(potentialArr[0][q] + potentialArr[1][w])
              } else{
                for (let e = 0; e<potentialArr[2].length; e++){
                if(observed.length < 4){
                  newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e])
                  } else {
                  for (let r = 0; r<potentialArr[3].length; r++){
                    if(observed.length < 5){
                      newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e] + potentialArr[3][r])
                      } else{
                      for (let t = 0; t<potentialArr[4].length; t++){
                        if(observed.length < 6){
                          newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e] + potentialArr[3][r] + potentialArr[4][t])
                          } else{
                          for (let y = 0; y<potentialArr[5].length; y++){
                            if(observed.length < 7){
                              newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e] + potentialArr[3][r] + potentialArr[4][t] + potentialArr[5][y])
                              } else{
                              for (let u = 0; u<potentialArr[6].length; u++){
                              if(observed.length < 8){
                                newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e] + potentialArr[3][r] + potentialArr[4][t] + potentialArr[5][y] + potentialArr[6][u])
                                } else{
                                for (let i = 0; i<potentialArr[7].length; i++){
                                  newArr.push(potentialArr[0][q] + potentialArr[1][w] + potentialArr[2][e] + potentialArr[3][r] + potentialArr[4][t] + potentialArr[5][y] + potentialArr[6][u] + potentialArr[7][i])
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  return newArr;
}
