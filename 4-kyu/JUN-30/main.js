/*
Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

A player wins by connecting four of their discs horizontally, vertically or diagonally.

Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

Your connectFour function will be passed an array matrix similar to this:

[['-','-','-','-','-','-','-'],
 ['-','-','-','-','-','-','-'],
 ['-','-','-','R','R','R','R'],
 ['-','-','-','Y','Y','R','Y'],
 ['-','-','-','Y','R','Y','Y'],
 ['-','-','Y','Y','R','R','R']];

'R' represents a red disc

'Y' represents a yellow disc

'-' represents an unoccupied space

In this example the red player won by making a horizontal line of 4 red discs.

If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

You can learn more about how Connect Four is played here: http://en.wikipedia.org/wiki/Connect_Four
*/

//My solution
function connectFour(board) {
  let space = [];
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[i].length; j++){
      if(i < board.length-3 && (board[i][j] + board[i+1][j] + board[i+2][j] + board[i+3][j] === "RRRR" || board[i][j] + board[i+1][j] + board[i+2][j] + board[i+3][j] === "YYYY")){
        return board[i][j];
      }
      if(j < board[i].length-3 && (board[i][j] + board[i][j+1] + board[i][j+2] + board[i][j+3] === "RRRR" || board[i][j] + board[i][j+1] + board[i][j+2] + board[i][j+3] === "YYYY")){
        return board[i][j];
      }
      if((j < board[i].length-3 && i < board.length-3) && (board[i][j] + board[i+1][j+1] + board[i+2][j+2] + board[i+3][j+3] === "RRRR" || board[i][j] + board[i+1][j+1] + board[i+2][j+2] + board[i+3][j+3] === "YYYY")){
        return board[i][j];
      }
      if((i >= 3 && j >= 3) && (board[i][j] + board[i-1][j-1] + board[i-2][j-2] + board[i-3][j-3] === "RRRR" || board[i][j] + board[i-1][j-1] + board[i-2][j-2] + board[i-3][j-3] === "YYYY")){
        return board[i][j];
      }
      if((j < board[i].length-3 && i >= 3) && (board[i][j] + board[i-1][j+1] + board[i-2][j+2] + board[i-3][j+3] === "RRRR" || board[i][j] + board[i-1][j+1] + board[i-2][j+2] + board[i-3][j+3] === "YYYY")){
        return board[i][j];
      }
      if((i < board.length-3 && j >= 3) && (board[i][j] + board[i+1][j-1] + board[i+2][j-2] + board[i+3][j-3] === "RRRR" || board[i][j] + board[i+1][j-1] + board[i+2][j-2] + board[i+3][j-3] === "YYYY")){
        return board[i][j];
      }
      if(board[i][j] === "-"){
        space.push("-");
      }
    }
  }
  if(space.length > 0){
    return "in progress";
  }
  return"draw"
}
