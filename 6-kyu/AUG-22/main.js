/*
Write a function that accepts msg string and returns local tops of string from the highest to the lowest.
The string's tops are from displaying the string in the below way:

                                                      3 
                              p                     2   4
            g               o   q                 1
  b       f   h           n       r             z 
a   c   e       i       m          s          y
      d           j   l             t       x
                    k                 u   w 
                                        v

The next top is always 1 character higher than the previous one. For the above example, the solution for the abcdefghijklmnopqrstuvwxyz1234 input string is 3pgb.

    When the msg string is empty, return an empty string.
    The input strings may be very long. Make sure your solution has good performance.

Check the test cases for more samples.
Note for C++

Do not post an issue in my solution without checking if your returned string doesn't have some invisible characters. You read most probably outside of msg string.
*/

//My solution
function tops(msg) {
  let result = "";
  let newArr = msg.split("");
  let checkArr = [0];
  let num = 1;
  while(num + checkArr[0] < newArr.length){
    let value = num + checkArr[0];
    checkArr.unshift(value);
    num++;
  }
  checkArr.pop();
  let checkTops = 0;
  if(checkArr.length % 2 === 0){
    checkTops = 1;
  }
  for(let i = checkTops; i < checkArr.length; i+=2){
    result += newArr[checkArr[i]];
  }
   return result;
}
