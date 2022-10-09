/*
Beaches are filled with sand, water, fish, and sun. Given a string, calculate how many times the words "Sand", "Water", "Fish", and "Sun" appear without overlapping (regardless of the case).
Examples

sumOfABeach("WAtErSlIde")                    ==>  1
sumOfABeach("GolDeNSanDyWateRyBeaChSuNN")    ==>  3
sumOfABeach("gOfIshsunesunFiSh")             ==>  4 
sumOfABeach("cItYTowNcARShoW")               ==>  0
*/

//My solution
function sumOfABeach(beach) {
  let words = ["sand", "water", "fish", "sun"];
  const lower = beach.toLowerCase();
  let count = 0;
  for(let i = 0; i < lower.length; i++){
    if(words.indexOf(lower.slice(i, i+3)) !== -1 || words.indexOf(lower.slice(i, i+4)) !== -1 || words.indexOf(lower.slice(i, i+5)) !== -1){
      count++;
    }
  }
  return count;
}
