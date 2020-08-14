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

const average = (array) => {
  let sum = 0;

  // if para definir se o tamanho é ()
  if (array.length === 0) return undefined;
  for (let index = 0; index < array.length; index += 1) {
    // if para olhar se é uma string ou '' e voltar indefinido caso contrario faz a soma
    if (typeof array[index] !== 'number' || typeof array[index] === 'string') return undefined;
    sum += array[index];
  }

  // parte realmente da média
  const averageSum = Math.floor(sum / array.length);
  return (averageSum);
};


module.exports = average;
