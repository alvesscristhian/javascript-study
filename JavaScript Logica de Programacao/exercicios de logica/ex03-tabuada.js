// Escreva um código que mostre no console a tabuada do 5 (de 1 até 10), no seguinte formato:
const numero = 5
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let soma = numero * i;
        console.log(`${numero} x ${i} = ${soma}`);
    }
}
tabuada(numero);