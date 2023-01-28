const numerosPares = [2, 4, 6];
const numerosImpares = [1, 3, 5];
const numeros = [...numerosImpares, ...numerosPares];
console.log(numeros);

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6];
console.log(num1, num2, outrosNumeros);