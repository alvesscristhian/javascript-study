/*
Object.values // Semelhante ao keys, retorna o valor das chaves
Object.entries // Cria um array dividido entre chave/valor
Object.getOwnPropertyDescriptor(objeto, 'chave') // Descreve as propriedades de um objeto
Object.assign(destino, objetoPCopiar) // Copia um objeto
... (spread) // Espalha os valores do objeto

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = { nome: 'Cristhian', preco: 70 };

for(let entry of Object.entries(produto)) {
    console.log(entry[0], entry[1]);
}
 