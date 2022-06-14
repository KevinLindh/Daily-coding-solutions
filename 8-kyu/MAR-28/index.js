/*
My washing machine uses water amount of water to wash clothes amount of clothes. You are given a load(in JavaScript and Python) or max_load (in Ruby) amount of clothes to wash. For each single item of load above the standard amount of clothes, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the amount of clothes is 10, the amount of water it requires is 5 and the load is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 parameters - howMuchWater(water, load, clothes) / how_much_water(water, load, clothes) / how_much_water(water, max_load, clothes)

My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

The answer should be rounded to the nearest 2 decimal places.
*/

//My solution
function howMuchWater(water, load, clothes){
  if(clothes/load > 2){
    return "Too much clothes";
  } else if(clothes/load < 1){
    return "Not enough clothes"
  } else {
  return Number((water*Math.pow(1.1, (clothes-load))).toFixed(2));
    }
}
