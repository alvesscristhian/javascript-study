const raiz = n => n ** 0.5 // Simplifica a função
console.log(raiz(64))

const raizes = function (n) { // Função dentro de uma variavel
  return n ** 0.5
}
console.log(raizes(9))

function soma (x = 1, y = 5) { // Exemplos de funções simples
  const resultado = x + y
  return resultado
}
const resultado = soma()
console.log(resultado)

function saudacao (nome) { // Exemplos de funções simples
  return `Bom dia ${nome}!`
}
const variavel = saudacao('Cristhian')
console.log(variavel)
