const pessoa1 = {
  nome: 'Cristhian',
  sobrenome: 'Alves',
  idade: 18,

  fala () {
    console.log(`A minha idade atual é ${this.idade}.`)
  },

  incrementaIdade () {
    ++this.idade
  }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()

// function sistemaNomes (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade}
// };

// const dados = sistemaNomes('Cristhian', 'Alves', 18);
// console.log(dados);
