const num1 = 9.49
console.log(100 / 0.01) // Dado infinity é avaliado como true

// console.log(num1 ** 0.5); // Método para pegar a raiz quadrada de um número

// let resultado = Math.floor(num1); // Faz com que o número real seja arredondado para menor
// let resultado = Math.ceil(num1); // Faz com que o número real seja arredondado para maior
// let resultado = Math.round(num1); // Faz com que o número seja arredondado para o número mais proximo

// console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Pega o maior número da sequência
// console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Pega o menor número da sequência
const aleatorio = Math.round(Math.random() * (10 - 0) + 0); // .random - Gera um número real aleatório entre 0 e 1
console.log(aleatorio);
