/*
Mars rover is on an important mission to take pictures of Mars.

In order to take pictures of all directions it needs an algorithm to help it turn to face the correct position.

Mars rover can face 4 different directions, that would be N, S, E, W. Every time it needs to turn it will call a command turn passing the current position it is facing and the position it wants to face.

For example:

    if it asks turn N E the expected result would be right
    if it asks turn N W the expected result would be left

Mars rover can only make one move at a time and it will only request positions that require a single move.

Can you write an algorithm that tells if it should move left or right?
*/

//My solution
function turn(current, target) {
  const facing = {N: 'E', E: 'S', S: 'W', W: 'N'}
  return facing[current] === target ? 'right' : 'left'
}
