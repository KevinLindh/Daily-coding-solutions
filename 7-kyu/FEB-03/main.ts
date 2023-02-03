/*
For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

//My solution
export function add(num1: number, num2: number): number {
  let result = [];
  let first = num1.toString().split("");
  let second = num2.toString().split("");
  while(first.length > 0 || second.length > 0){
    if(first.length > 0 && second.length > 0){
      result.push(Number(first.pop()) + Number(second.pop()))
    } else if(first.length > 0){
      result.push(Number(first.pop()))
    } else{
      result.push(Number(second.pop()));
    }
  }
  return +(result.reverse().join(""));
}
