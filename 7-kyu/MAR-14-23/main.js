/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/

//My solution
function nerdify(txt){
  let newArr = txt.split("");
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].toLowerCase() === "a"){
      newArr[i] = 4;
    } else if (newArr[i].toLowerCase() === "e"){
      newArr[i] = 3;
    } else if (newArr[i] === "l"){
      newArr[i] = 1;
    }
  } 
  return newArr.join("");
}
