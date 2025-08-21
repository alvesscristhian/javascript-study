// arrow functions não possui (arguments) que serve para mostrar todos os parametros

function conta(operador, acumulador, ...numeros) { // ... Rest Operator: Recebe todo o resto em um array
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50);


// Podemos ter parametros de array e objetos.
// function funcao([valor1, valor2, valor3]) {
//     console.log(valor1, valor2, valor3);
// }
// funcao(['Cristhian', 'Maryana', 'Creison']);