/*
You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.

['Northern', 'Central', 243, 1, 'Victoria']

Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent buses and calculated as one bus fare for each set.

For example: 'Piccadilly', 56, 93, 243, 20, 14 -> "£6.90"

Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format (where x is a number): £x.xx
*/

//My solution
function londonCityHacker(journey) {
  let consecutive = false; 
  let bus = 1.5;
  let tube = 2.4;
  let sum = 0;
  for(let i = 0; i < journey.length; i++){
    if(typeof journey[i] === "string"){
      consecutive = false;
      sum += tube;
    } else if(consecutive){
      consecutive = false;
    } else{
      consecutive = true;
      sum += bus;
    }
  }
  return "£" + sum.toFixed(2)
}
