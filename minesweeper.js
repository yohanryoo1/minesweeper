document.addEventListener('DOMContentLoaded', startGame)

//Define your `board` object here!
var board = {
  cells: [
          { row: 0,
            col: 0,
            isMine: true, //mine
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 0, 
            col: 1,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 0, 
            col: 2,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0},
          { row: 1, 
            col: 0,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 1, 
            col: 1,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 1, 
            col: 2,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0},
          { row: 2, 
            col: 0,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 2, 
            col: 1,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}, 
          { row: 2, 
            col: 2,
            isMine: false,
            hidden: true,
            isMarked: false,
            surroundingMines: 0}
          ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  //assign the result of countSurroundingMines to a property on each cell object. The new property should be called surroundingMines
  board.cells.forEach((cell) => {
    cell.surroundingMines = countSurroundingMines(cell);
  })
  document.addEventListener('click', checkForWin);
  document.addEventListener('contextmenu', checkForWin);
};


// Define this function to look for a win condition:
function checkForWin () {

  // for loops can be exited after ANY interation
  for (let i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) return;
    else if (!board.cells[i].isMine && board.cells[i].hidden) return;
  }

  // ! ! ! Can not use .forEach in this case ! ! !
  // .forEach loops from beginning to end. 
  // board.cells.forEach((cell) => {
  //   if (cell.isMine && !cell.isMarked) return;
  //   if (!cell.isMine && cell.hidden) return;
  // })

  lib.displayMessage('You win!');
};

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  let numOfSurroundingMines = 0;
  surrounding.forEach((surroundingCell) => {
    if (surroundingCell.isMine === true) {
      numOfSurroundingMines += 1;
    };
  })

  return numOfSurroundingMines;
  }
