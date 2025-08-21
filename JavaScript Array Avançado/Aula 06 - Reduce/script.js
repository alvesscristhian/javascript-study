// Reduz o array reduce(acumulador, valor, indice, array)}, valorInicial

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
 
const total = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador += valor;
    return acumulador;
}, 0);
// console.log(total);




// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 75 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor
});
console.log(maisVelha);