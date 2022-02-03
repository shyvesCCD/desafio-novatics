const validateSudoku = (board) => {
  let valueLines = null;
  for (let i = 0; i < board.length; i++) {
    let pivot = validateSudokuLines(board[i]);
    if (!pivot) {
      valueLines = false;
    } else {
      valueLines = true;
    }
  }

  let valueColomns = validateSudokuColumn(board);

  if (!valueLines || !valueColomns) {
    return false;
  } else {
    return true;
  }
};

const validateSudokuLines = (array) => {
  const pivot = array.filter(
    (element, index) => array.indexOf(element) !== index && element !== "."
  );
  if (pivot.length === 0) {
    return true;
  } else {
    return false;
  }
};

const validateSudokuColumn = (array) => {
  let pivot = [];
  let result = Boolean;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pivot.push(array[j][i]);
      if (pivot.length === array.length) {
        result = validateSudokuLines(pivot);
        pivot = [];
        if (result === false) {
          return false;
        }
      }
    }
  }
  return true;
};

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(validateSudoku(board)); // Expected -> true
console.log(validateSudoku(board2)); // Expected -> false
