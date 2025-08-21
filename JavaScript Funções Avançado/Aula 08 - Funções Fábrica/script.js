// Funções que retornam objetos.
// This se refere a pessoa que chamou o que está executando
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // Getter = usado apenas para obter valor não para setar.
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter = usado para setar um valor novo no método
        set nomeCompleto(valor) {
            valor = valor.split(' '); // Cria um array do nome completo
            this.nome = valor.shift(); // Extrai o primeiro nome do array
            this.sobrenome = valor.join(' '); // Junta os nomes
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}.` // O this é o p1
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc() { // Get faz a função fingir que é um atributo da class
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}
const p1 = criaPessoa('Cristhian', 'Alves', 1.68, 68);
p1.nomeCompleto = 'Maryana Alves dos Santos'
console.log(p1.nome);
console.log(p1.sobrenome);
