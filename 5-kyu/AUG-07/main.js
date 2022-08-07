/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()
*/

//My solution
Math.round = function(number) {
  let checker = parseInt(number);
  if(number - checker >= 0.5){
    return checker + 1; 
  }
  return checker; 
};

Math.ceil = function(number) {
  let checker = parseInt(number);
  if(checker === number){
    return number;
  }
  return checker + 1;
};

Math.floor = function(number) {
  return parseInt(number)
};
