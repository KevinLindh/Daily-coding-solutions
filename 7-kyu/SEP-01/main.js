/*
Task

Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal (note that 0 and n - 1 are neighbouring, too).

Given n and firstNumber/first_number/first-number, find the number which is written in the radially opposite position to firstNumber.
Example

For n = 10 and firstNumber = 2, the output should be 7

Input/Output

    [input] integer n

    A positive even integer.

    Constraints: 4 ≤ n ≤ 1000.

    [input] integer firstNumber/first_number/first-number

    Constraints: 0 ≤ firstNumber ≤ n - 1

    [output] an integer
*/

//My solution
function circleOfNumbers(n, firstNumber) {
  let middle = n/2;
  if(firstNumber < middle){
    return firstNumber + middle;
  } else if(firstNumber > middle){
    return firstNumber - middle;
  } else {
    return 0;
  }
}
