/*
dataand data1 are two strings with rainfall records of a few cities for months from January to December. The records of towns are separated by \n. The name of each town is followed by :.

data and towns can be seen in "Your Test Cases:".
Task:

    function: mean(town, strng) should return the average of rainfall for the city town and the strng data or data1 (In R and Julia this function is called avg).
    function: variance(town, strng) should return the variance of rainfall for the city town and the strng data or data1.

Examples:

mean("London", data), 51.19(9999999999996) 
variance("London", data), 57.42(833333333374)

Notes:

    if functions mean or variance have as parameter town a city which has no records return -1 or -1.0 (depending on the language)

    Don't truncate or round: the tests will pass if abs(your_result - test_result) <= 1e-2 or abs((your_result - test_result) / test_result) <= 1e-6 depending on the language.

    Shell tests only variance

    A ref: http://www.mathsisfun.com/data/standard-deviation.html

    data and data1 (can be named d0 and d1 depending on the language; see "Sample Tests:") are adapted from: http://www.worldclimate.com
*/

//My solution
function mean(town, strng) {
 let newArr = strng.split("\n");
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].split(":")[0] === town){
      let values = newArr[i].match(/[-+]?[0-9]*\.?[0-9]+/g);
      return values.reduce((acc, val)=> acc + Number(val),  0)/values.length;
    }
  }
  return -1;
}

function variance(town, strng) {
  let newArr = strng.split("\n");
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i].split(":")[0] === town){
      let values = newArr[i].match(/[-+]?[0-9]*\.?[0-9]+/g);
      let mean = values.reduce((acc, val)=> acc + Number(val),  0)/values.length;
      return values.map(val=> Math.pow((val-mean), 2)).reduce((acc, val)=> acc + val, 0)/values.length;
    }
  }
  return -1;
}
