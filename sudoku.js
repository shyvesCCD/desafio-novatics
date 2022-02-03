/* 
  Função principal responsável por fazer todas as chamadas
  para validar o nosso sudoku.
  Recebendo como parâmetro o nosso board/sudoku e 
  retornando false se o sudoku não for válido e true se for válido.
*/
const validateSudoku = (board) => {
  let valueLines = null;
  for (let i = 0; i < board.length; i++) {
    /* 
      Aqui então eu faço um for percorrendo o array primeiramente pelas linhas.
      Utilizo então a função validateSudokuLines que recebe como parâmetro um array,
      porém agora apenas linha por linha do nosso board/sudoku.
      A função validateSudokuLines retorna true/false.
    */
    let pivot = validateSudokuLines(board[i]);
    /* 
      Então crio uma variável pivot(pivô) responsável por armazenar o valor do retorno da função.
      se o valor for false mudo o valor da variável valueLines para false e dou um break no for,
      se não torno o valor de valueLines para true.
    */
    if (!pivot) {
      valueLines = false;
      break;
    } else {
      valueLines = true;
    }
  }

  /*
    Aqui eu apens chamo a função validateSudokuColumn que recebe como parâmetro
    o nosso sudoku/board e armazeno o valor do retorno da função em uma variável auxiliar.
  */
  let valueColomns = validateSudokuColumn(board);

  let valueSquares = validateSudokuSquares(board);

  /*
    Aqui eu apenas checo se alguma das variáveis está como valor false, caso sim,
    eu retorno false para identificar que o sudoku não é válido, caso não, eu retorno true
    para sinalizar que o sudoku é válido.
  */
  if (!valueLines || !valueColomns || !valueSquares) {
    return false;
  } else {
    return true;
  }
};

/*
  Aqui utilizo novamente o método filter para verificar se temos algum elemento duplicado
  ignorando os "." dentro do array.
*/
const validateSudokuLines = (array) => {
  const pivot = array.filter(
    (element, index) => array.indexOf(element) !== index && element !== "."
  );
  // Caso o nosso array pivô esteja vazio retorno true pois não temos nenhum elemento duplicado.
  if (pivot.length === 0) {
    return true;
  } else {
    return false;
  }
};

/*
  Nessa função então eu transformo as colunas em um array unidirecional para facilitar a manipulação.
  Utilizando dois for vou percorrendo cada coluna e armazenando em um array pivô.
  Já que transformei nossas colunas em um array unidirecional reaproveito a função validateSudokuLines
  para validar que não temos nenhum elemento repetido.
*/
const validateSudokuColumn = (array) => {
  let pivot = [];
  let result = null;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      pivot.push(array[j][i]);
      // Aqui então eu verifico se o nosso array pivô já tem o tamanho do nosso array.
      if (pivot.length === array.length) {
        // Então envio esse array para nossa função e logo após eu reseto esse nosso array auxiliar.
        result = validateSudokuLines(pivot);
        pivot = [];
        // Caso o resultado retorne falso eu retorno a função com o valor false.
        if (!result) {
          return false;
        }
      }
    }
  }
  // Caso não retorne em nenhum momento como false eu retorno como true.
  return true;
};

const validateSudokuSquares = (board) => {
  let array1 = [];
  let array2 = [];
  let array3 = [];
  let result1 = null;
  let result2 = null;
  let result3 = null;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (j < 3) {
        array1.push(board[i][j]);
        if (array1.length === 9) {
          result1 = validateSudokuLines(array1);
          array1 = [];
          if (!result1) {
            return false;
          }
        }
      } else if (j < 6 && j >= 3) {
        array2.push(board[i][j]);
        if (array2.length === 9) {
          result2 = validateSudokuLines(array2);
          array2 = [];
          if (!result2) {
            return false;
          }
        }
      } else if (j >= 6 && j < board.length) {
        array3.push(board[i][j]);
        if (array3.length === 9) {
          result3 = validateSudokuLines(array3);
          array3 = [];
          if (!result3) {
            return false;
          }
        }
      }
    }
  }
  return true;
};

board4 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "8", "5", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "4", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

validateSudoku(board4);

module.exports = validateSudoku;
