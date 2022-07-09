/*
Your friend Cody has to sell a lot of jam, so he applied a good 25% discount to all his merchandise.

Trouble is that he mixed all the prices (initial and discounted), so now he needs your cool coding skills to filter out only the discounted prices.

For example, consider this inputs:

"15 20 60 75 80 100"
"9 9 12 12 12 15 16 20"

They should output:

"15 60 75"
"9 9 12 15"

Every input will always have all the prices in pairs (initial and discounted) sorted from smaller to bigger.

You might have noticed that the second sample input can be tricky already; also, try to have an eye for performances, as huge inputs could be tested too.

Final Note: kata blatantly taken from this problem (and still not getting why they created a separated Code Jam for ladies, as I find it rather discriminating...).
*/

//My solution
function findDiscounted(prices){
  if(prices === ""){
    return prices;
  }
  let answer = [];
  let newArr = prices.split(" ").map(val => Number(val));
  for(let i = 0; i < newArr.length; i++){
    let spot = newArr.indexOf(newArr[i]/3*4);
    let original = i;
    let double = false;
    if(original < i){
      double = true;
    }
    if(newArr.includes(newArr[i]/3*4)){
      answer.push(newArr[i]);
      if(double){
        newArr.splice(spot, 1);
        newArr.splice(i-1, 1);
        i -= 2;
      } else {
        newArr.splice(spot, 1);
        newArr.splice(i, 1);
        i--;
      }
    }
  }
  return answer.join(" ");
}
