// const pessoa1 = new Object(); Forma de criar objeto, ou usar o jeito tradicional {}
// pessoa1.nome = 'Cristhian';

// Factory Function
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto() {
//             return `${this.nome} ${this.sobrenome}`;
//         }
//     }
// }
// const p1 = criaPessoa('Cristhian', 'Alves');
// console.log(p1.nomeCompleto);

// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    Object.freeze(this); // Trava o Objeto para não ter mudanças
}
// This representa ao objeto: p1 = new Pessoa() - Gera objeto vazio { } o this funcionaria como p1.nome/p1.sobrenome, etc... 
// Se eu gerasse um novo p2 = new Pessoa(), o this se referia ao p2, então seria como se fosse p2.nome, etc...
const p1 = new Pessoa('Cristhian', 'Alves');
const p2 = new Pessoa('Maryana', 'Alves');
p1.nome = 'Outra coisa'; // Altera o valor da chave nome.
console.log(p1);
console.log(p2);