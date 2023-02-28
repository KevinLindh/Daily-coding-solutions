/*
Situation

You have been hired by a company making electric garage doors. Accidents with the present product line have resulted in numerous damaged cars, broken limbs and several killed pets. Your mission is to write a safer version of their controller software.
Specification

We always start with a closed door. The remote control has exactly one button, with the following behaviour.

    If the door is closed, a push starts opening the door, and vice-versa
    It takes 5 seconds for the door to open or close completely
    While the door is moving, one push pauses movement, another push resumes movement in the same direction

In order to make the door safer, it has been equiped with resistance-based obstacle detection. When the door detects an obstacle, it must immediately reverse the direction of movement.
Input

A string where each character represents one second, with the following possible values.

    '.' No event
    'P' Button has been pressed
    'O' Obstacle has been detected (supersedes P)

As an example, '..P....' means that nothing happens for two seconds, then the button is pressed, then no further events.
Output

A string where each character represents one second and indicates the position of the door (0 if fully closed and 5 fully open). The door starts moving immediately, hence its position changes at the same second as the event.
Example

..P...O..... as input should yield 001234321000 as output
*/

//My solution
function door(events) {
  let answer = ""
  let count = 0;
  let active = false;
  let up = true;
  let newArr = events.split("");
  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === "P" && !active){
      active = true;
      if(up){
          count++;
        } else {
          count--;
        }
    } else if(count === 5 && up && newArr[i] === "P" && active){
      up = false
      count--;
    } else if(count === 0 && !up && newArr[i] === "P" && active){
      up = true;
      count++;
    }else if(newArr[i] === "P" && active){
      active = false;
    } else if(newArr[i] === "O"){
      if(up){
        up = false;
        count--;
      } else{
        up = true;
        count++;
      }
    } else if(active && up){
      if(count < 5){
          count++;
        }
    } else if(active && !up){
      if(count > 0){
        count--
      }
    } else {
      
    }
    answer += count;
  }
  console.log(events)
  return answer;
}
