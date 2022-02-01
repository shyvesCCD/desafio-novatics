/*
  Função responsável por realizar o sort do nosso array,
  foi escolhido a realização de um BubbleSort para ordenação.
*/
const orderList = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temporalyArray = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporalyArray;
      }
    }
  }
  /*
    Aqui então eu chamo a segunda função responsável por remover items duplicados
    caso eles existam!
  */
  return removeRepeatedElements(arr);
};

/* 
  Função responsável então por remover os items duplicados 
  utilizando o método filter do array.  
  O método filter retorna por padrão um novo array de acordo com as condições escolhidas.
  Então ao final do nosso filter eu apenas retorno o valor do novo array.
*/
const removeRepeatedElements = (arr) => {
  return arr.filter((element, index) => arr.indexOf(element) === index);
};

module.exports = orderList;
