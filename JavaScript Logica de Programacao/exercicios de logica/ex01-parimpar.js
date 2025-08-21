// Escreva um programa que solicite um número ao usuário e informe se ele é par ou ímpar.
const numeroUsuario = prompt('Digite um número');

function calculo(numeroUsuario) {
    const soma = numeroUsuario % 2 === 0 ? 'O número é par' : 'O número é impar';
    return alert(soma);
}

calculo(numeroUsuario);