class Pessoa { // Cria uma classe
    constructor(nome, sobrenome) { // Define parametros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() { // Cria métodos direto no prototype da class
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Cristhian', 'Alves');
console.log(p1);