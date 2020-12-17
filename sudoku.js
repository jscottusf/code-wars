// Sudoku Background
// Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.

// Sudoku Solution Validator
// Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

// The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

//ugly solution

function validSolution(board){

    let boardValue = true;

    const checkRows = (array) => {
        array.forEach(row => checkNumbers(row));
    }

    const checkColumns = (array) => {
        for (let i = 0; i < array.length; i++) {
            let colArray = [];
            array.forEach(row => {
                colArray.push(row[i]);
            });
            checkNumbers(colArray);
        }
    }

    const checkSubGrids = (array) => {
        const getSubGridIndexes = (num) => {
            if (num === 1) {
                return [0,1,2];
            } else if (num === 2) {
                return [3,4,5];
            } else {
                return [6,7,8];
            }
        }

        const getSubGridValues = (x, y, array) => {
            let values = [];

            rows = getSubGridIndexes(x);
            columns = getSubGridIndexes(y);

            rows.forEach(row => {
                columns.forEach(column => {
                    values.push(board[row][column]);
                });
            });

            return values;
        };

        const squareSections = [1,2,3];
        return squareSections.every(squareX => {
            return squareSections.every(squareY => checkNumbers(getSubGridValues(squareX, squareY, array)));
        });
    }

    const checkNumbers = (array) => {
        let checkArray = [];
        array.forEach(num => {
            if (checkArray.indexOf(num) === -1 && num > 0 && num < 10) {
                checkArray.push(num);
            }
        });

        if (checkArray.length !== 9) {
            boardValue = false;
        }
    }

    checkRows(board);

    checkColumns(board)

    checkSubGrids(board);

    return boardValue;
}

console.log(
    validSolution(
    [
        [5, 3, 4, 6, 7, 0, 9, 1, 2], 
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ])
);

console.log(
    validSolution([
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
      ])
);

//fancy solution one

function equals45(n){
    return n == 45; 
}
  
function oneFancySolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
}

//fancy solution two

function anotherFancySolution(board){
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
    var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
    for (var i = 0; i < 9; i++)
      if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
        return false;
    return true;
}