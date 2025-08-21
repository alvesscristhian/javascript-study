let num1 = 0.7 // Number
const num2 = 0.1 // Number
const temp = num1 * 'Olá'

// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
// num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

num1 = Number(num1.toFixed(2)) // Melhor opção para precisão de numeros IEEE 754-2008

console.log(num1)
console.log(Number.isInteger(num1))

// Na Variavel = Faz que a função altere o valor real, em situações que precisamos apenas mostrar na tela a conversão não é muito recomendado
// No console.log() = Faz com que a função não altere o valor real, apenas convertendo no console.log();

// console.log(num1.toString() + num2); // Transforma a variavel number em uma String
// console.log(num1.toString(2)); // Converte o valor da variavel number em números binarios utilizando a função(2)
// console.log(num1.toFixed(2)); // Arredonda um valor real extenso com a quantidade de casas decimais escolhidas na função(Ex: 2 casas decimais)

console.log(Number.isInteger(num2)) // Pergunta se o valor da variavel é inteiro, e retorna um valor booleano
console.log(Number.isNaN(temp)) // Pergunta para o JS se essa conta é um NaN e retorna um valor booleano
