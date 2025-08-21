// for (let indice in objeto) // For in lê os indices ou chaves de um array/objeto

const pessoa = {
    nome: 'Cristhian',
    sobrenome: 'Alves',
    idade: 18
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}