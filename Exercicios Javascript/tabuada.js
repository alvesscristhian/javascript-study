/*
    🚩 Exercício: Tabuada Inteligente

    Crie uma função que receba um número inteiro.

    Essa função deve gerar e retornar a tabuada desse número (de 1 até 10).

    O resultado deve vir como um array de strings, por exemplo:

    ["2 x 1 = 2", "2 x 2 = 4", ..., "2 x 10 = 20"]


    Depois, use um loop para imprimir cada linha da tabuada no console.

(   Desafio extra 💡) Se o número for negativo ou zero, retorne "Número inválido".
*/

function getIntNumber(number) {
    if (!Number.isInteger(number) || number <= 0) return console.log('Número inválido');
    
    const infos = [];
    for(let i = 1; i <= 10; i++) {
        let result = number * i;
        infos.push(`${number} x ${i} = ${result}`);
    };
    return infos;
}
function showResult(result) {
    for (let multiplication of result) {
        console.log(multiplication);
    }
};

showResult(getIntNumber(5));
