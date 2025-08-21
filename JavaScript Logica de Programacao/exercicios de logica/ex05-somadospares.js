// 5. Soma de Números Pares
// Solicite um número inteiro n e calcule a soma de todos os números pares de 1 até n.

const numeroUsuario = prompt('Digite um número inteiro');
let numeroVerificado;

function somarNumeros(numeroVerificado) {
    let soma = 0;

    for (let i = 1; i <= numeroVerificado; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    alert(`A soma dos numeros pares de 1 até ${numeroVerificado} é ${soma}`);
}

function verificarInteiro(numeroUsuario) {
    const numero = Number(numeroUsuario);

    if (!Number.isInteger(numero)) {
        alert('Esse número não é inteiro!');
        return null;
    } else {
        return numero;
    }
}

numeroVerificado = verificarInteiro(numeroUsuario);

if (numeroVerificado !== null) {
    somarNumeros(numeroVerificado);
}