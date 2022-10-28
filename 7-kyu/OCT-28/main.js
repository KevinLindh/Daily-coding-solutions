/*
The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/

//My solution
Array.prototype.reverse = function() {
  let cur = this.length-1;
  for(let i = 0; i < Math.ceil(this.length/2); i++){
    if(this.length%2 !== 0 && i === Math.ceil(this.length/2)){
    } else {
      let tmp = this[cur];
      this[cur] = this[i];
      this[i] = tmp;
      cur--;
    }
  }
  return this
};
