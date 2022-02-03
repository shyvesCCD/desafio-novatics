const validateSudoku = (board) => {
  let valueLines = null;
  for (let i = 0; i < board.length; i++) {
    let result = validateSudokuLines(board[i]);
    if (result) {
      valueLines = false;
    }
  }
  const valueColomns = validateSudokuColumn(board);
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
  if (!pivot.length) {
    return false;
  } else {
    return true;
  }
};

const validateSudokuColumn = (array) => {
  let pivot = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pivot.push(array[j][i]);
      if (pivot.length === array.length) {
        let result = validateSudokuLines(pivot);
        console.log(result);
        pivot = [];
        if (result) {
          return false;
        }
      }
    }
  }
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

console.log(validateSudoku(board));
