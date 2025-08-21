// Fazer uma função que cria uma new date e formata ela, tambem adiciona um zero a esquerda

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
};

function formataData(e) {
    const dia = zeroAEsquerda(e.getDate());
    const mes = zeroAEsquerda(e.getMonth() + 1);
    const ano = zeroAEsquerda(e.getFullYear());
    const hora = zeroAEsquerda(e.getHours());
    const min = zeroAEsquerda(e.getMinutes());
    const seg = zeroAEsquerda(e.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
};

const data = new Date();
const dataBrasil = formataData(data); // Ei função formata data, recebe essa variavel para fazer sua função!
console.log(dataBrasil);