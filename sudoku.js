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

  /*
    Aqui eu apenas checo se alguma das variáveis está como valor false, caso sim,
    eu retorno false para identificar que o sudoku não é válido, caso não, eu retorno true
    para sinalizar que o sudoku é válido.
  */
  if (!valueLines || !valueColomns) {
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
  let result = Boolean;
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

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "2", "8", ".", ".", ".", ".", "6", "."],
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
  [".", "6", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(validateSudoku(board)); // Expected -> true
console.log(validateSudoku(board2)); // Expected -> false
