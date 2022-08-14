/*
Instructions

The goal of this kata is two-fold:

1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.

2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.

For the sake of this kata, you can assume all input will be a positive integer.
Use Cases

Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
Examples

Input:

fibsFizzBuzz(5)

Output:

[ 1, 1, 2, 'Fizz', 'Buzz' ]

Input:

fibsFizzBuzz(1)

Output:

[1]

Input:

fibsFizzBuzz(20)

Output:

[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
*/

//My solution
var fibsFizzBuzz = function(n) {
  if(n === 1){
    return [1];
  }
  let answer = [1, 1];
  let copy = [1, 1];
  while(answer.length < n){
    let num = copy[copy.length-2] + copy[copy.length-1];
    if(num % 3 === 0 && num % 5 === 0){
      answer.push("FizzBuzz");
    } else if(num % 5 === 0){
      answer.push("Buzz")
    } else if(num % 3 === 0){
      answer.push("Fizz")
    } else {
      answer.push(num);
    }
    copy.push(num);
  }
  return answer;
}
