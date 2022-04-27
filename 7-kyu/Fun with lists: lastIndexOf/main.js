/*
Implement the method lastIndexOf (last_index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / last_index_of should return 3.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value.

Good luck!

https://www.codewars.com/kata/581c867a33b9fe732e000076/javascript
*/

//My solution
function lastIndexOf(head, value) {
  let index = 0;
  let answer = [];
  if(head === null){
    return -1;
  } 
  if(head.next === null){
    if(head.data === value){
      return 0;
    } else {
      return -1;
    }
  }
  while(head !== null){
    if(head.data === value){
      answer.push(index);
    }
    head = head.next;
    index++;
  }
  if(answer.length === 0){
    return -1;
  } else {
    return answer[answer.length-1];
  }
}
