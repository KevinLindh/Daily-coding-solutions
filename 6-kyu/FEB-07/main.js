/*

    Input: Integer n
    Output: String

Example:

a(4) prints as

   A   
  A A  
 A A A 
A     A

a(8) prints as

       A       
      A A      
     A   A     
    A     A    
   A A A A A   
  A         A  
 A           A 
A             A

a(12) prints as

           A           
          A A          
         A   A         
        A     A        
       A       A       
      A         A      
     A A A A A A A     
    A             A    
   A               A   
  A                 A  
 A                   A 
A                     A

Note:

    Each line's length is 2n - 1
    Each line should be concatenate by line break "\n"
    If n is less than 4, it should return ""
    If n is odd, a(n) = a(n - 1), eg a(5) == a(4); a(9) == a(8)
*/

//My solution
function a(n){
  if(n%2===1){
    n = n-1;
  }
  if(n < 4){
    return "";
  }
  let final = [];
  for(let i = 0; i < n; i++){
    let answer = new Array(n*2-1).fill(" ");
      if(i === 0){
        answer[n-1] = "A";
      } else if(i === n/2){
        for(let k = n-1-i; k <= n-1+i; k+=2){
          answer[k] = "A";
        }
      } else {
        answer[n-1-i] = "A";
        answer[n-1+i] = "A";
      }
    if(i !== n-1){
    answer.push("\n")
    }
    final.push(answer.join(""));
  }
  return final.join("");
}
