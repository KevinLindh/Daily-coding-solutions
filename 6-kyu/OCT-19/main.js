/*
Description:

Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

    words;
    commas in the middle;
    multiple periods at the end.

Sentence making rules:

    there must always be a space between words;
    there must not be a space between a comma and word on the left;
    there must always be one and only one period at the end of a sentence.

Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.'
*/

//My solution
function makeSentence(parts) {
  let answer = parts[0];
  for(let i = 1; i < parts.length ; i++){
    if(parts[i] === ","){
      answer += ",";
    } else if(parts[i] === "."){
      answer += ".";
      break;
    } else {
      answer += ` ${parts[i]}`;
    }
    if(parts[parts.length-1] !== "." && i === parts.length-1){
      answer += ".";
    }
  }
  return answer
}
