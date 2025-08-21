const pessoa = {
    nome: 'Cristhian',
    sobrenome: 'Alves',
    idade: 18,
    endereco: {
        rua: 'Rua Stelio Machado Loureiro',
        numero: 721
    }
};

// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
console.log(resto);