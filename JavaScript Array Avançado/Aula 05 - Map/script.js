// Objeto Map - Mapeia todos os valores de um array

// Dobre os números
//               0  1   2   3  4 .....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const valoresDobrados = numeros.map(valor => valor * 2);
// console.log(valoresDobrados);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomePessoa = pessoas.map(obj => obj.nome);
console.log(nomePessoa);
const removerChave = pessoas.map(obj => ({ idade: obj.idade }));
console.log(removerChave);
const comIds = pessoas.map((obj) => {
    const newObj = { ...obj };
    newObj.id = Math.floor(Math.random() * (1000 - 0) + 0);
    return newObj;
});
console.log(comIds);
console.log(pessoas);