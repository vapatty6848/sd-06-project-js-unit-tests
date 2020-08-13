/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// iniciando o PR
const assert = require('assert');

let arrayNumbers = [3, 4, 5];
let soma = 0;
const average = (array) => {
  for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number' || array === []) {
      return undefined;
    } else if (array[index] === 0) {
      return 0
    }
    soma += array[index];
  }
  const resultado = parseInt(soma / array.length);
  return resultado
  // console.log(Math.round(resultado));

};

module.exports = average;

// assert.strictEqual(typeof average, 'function');
// assert.strictEqual(average([2, 2]), 2);
// assert.strictEqual(average([1, 2]), 1);
// assert.strictEqual(average([3, 4, 5]), 6);
// assert.strictEqual(average([1, '2']), undefined);

// average(arrayNumbers);