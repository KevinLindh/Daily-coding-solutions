/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/javascript
*/

//My solution
function highestRank(arr){
let sorted = arr.sort();
return sorted.sort((a, b) => sorted.filter(v => v===a).length - sorted.filter(v => v===b).length).pop();
}
