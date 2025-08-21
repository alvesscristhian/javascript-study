// Funções construtoras constroi objetos
// Construtora - Deve criar a função com a primeira letra Maiuscula (new)
// new - Cria um objeto novo, transforma o this no p1, e retorna os dados nesse this

function Pessoa(nome, sobrenome) { // Como se fosse um molde
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ' Está falando')
    };
}
const p1 = new Pessoa('Cristhian', 'Alves');
const p2 = new Pessoa('Maryana', 'Rezende');
p2.metodo();
