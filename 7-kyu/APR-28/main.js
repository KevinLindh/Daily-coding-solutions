/*
Implement the method indexOf (index_of in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the first occurrence of that value if exists, or -1 otherwise.

For example: Given the list: 1 -> 2 -> 3 -> 3, and the value 3, indexOf / index_of should return 2.

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}

Note: the list may be null and can hold any type of value.

Good luck!
*/

//My solution
function indexOf(head, value) {
  if(head === null){
   return -1; 
  } else {
    let index = 0;
    while(head !== null){
      if(head.data === value){
        return index;
      }
      index++;
      head = head.next;
    }
    return -1;
  }
}
