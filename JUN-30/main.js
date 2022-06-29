/*
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules:

    There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
    Each ship must be a straight line, except for submarines, which are just single cell.
    The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
*/

//My solution
function validateBattlefield(field) {
  const allBoats = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4];
  let board = [];
  for(let i = 0 ; i < field.length; i++){
    for(let j = 0; j < field[i].length; j++){
      if((i < field.length-4) && field[i][j] + field[i+1][j] + field[i+2][j] + field[i+3][j] + field[i+4][j] == 5){
        return false;
      } 
      if((j < field[i].length-4) && field[i][j] + field[i][j+1] + field[i][j+2] + field[i][j+3] + field[i][j+4] == 5){
        return false;
      }
      if((i < field.length-3) && field[i][j] + field[i+1][j] + field[i+2][j] + field[i+3][j] == 4){
        board.push(4);
      } 
      if((j < field[i].length-3) && field[i][j] + field[i][j+1] + field[i][j+2] + field[i][j+3] == 4){
        board.push(4);
      }
      if((i < field.length-2) && field[i][j] + field[i+1][j] + field[i+2][j] == 3){
        board.push(3);
      } 
      if((j < field[i].length-2) && field[i][j] + field[i][j+1] + field[i][j+2] == 3){
        board.push(3);
      }
      if((i < field.length-1) && field[i][j] + field[i+1][j] == 2){
        board.push(2);
      } 
      if((j < field[i].length-1) && field[i][j] + field[i][j+1] == 2){
        board.push(2);
      }
       if((i < field.length) && field[i][j] == 1){
        board.push(1);
      } 
      if((i < field.length) && (field[i][j] == 1) && ((i < field.length-1 && j < field[i].length-1 && field[i+1][j+1] == 1) || (i < field.length-1 && j > 0 && field[i+1][j-1] == 1) || (i > 0 && j > 0 && field[i-1][j-1] == 1) || (i > 0 && j < field[i].length -1 && field[i-1][j+1] == 1))){
        return false;
      } 
    }
  }
  if(board.length != allBoats.length){
    return false;
  }
  board.sort();
  for(let k = 0; k < board.length; k++){
    if(board[k] != allBoats[k]){
      return false;
    }
  }
  return true;
}
