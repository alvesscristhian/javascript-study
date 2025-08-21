//               01234567
const umaString = 'O rato roeu a roupa do rei de roma.'
// let umaString = "Um texto";

console.log(umaString.charAt(1)) // Localizar um char pelo indice

console.log(umaString.concat(' em um lindo dia')) // Formas de concatenar um texto
console.log(umaString + ' em um lindo dia') // Formas de concatenar um texto
console.log(`${umaString} em um lindo dia`) // Formas de concatenar um texto

console.log(umaString.indexOf('texto', 3)) // Encontra o indice inicial contando do inicio para o final
console.log(umaString.lastIndexOf('m', 3)) // Encontra o indice inicial contando do final para inicio
console.log(umaString.search('r')) // Encontra o indice de acordo com a letra requerida

console.log(umaString.length) // Esse atributo mostra o tamanho da String, contando a partir do número 1, ja seu indice do conta do 0
console.log(umaString.length - 3) // Subtrai o tamanho da String com o valor escolhido

console.log(umaString.match(/rato/)) // Busca palavras requeridas dentro da String retornando resultado em forma de array, flag g faz com busque tudo | index = onde a palavra começa | input = retorna o texto original | groups = (mais avançado)
console.log(umaString.replace(/r/g, '#')) // Substitui palavras no texto, flag g faz com q mude todas strings com 'r'

console.log(umaString.slice(2, 6)) // Fatiador de String | 1ºIndice = indica o start, 2ºIndice = indica o end(Obs: sempre contar 1 a mais)
console.log(umaString.slice(-5, umaString.length)) // Você pega a quantidade real da String(35) e starta com o valor subtraido(start 30 end final)
console.log(umaString.split(' ', 3)) // Agrupa a String em um array, removendo todos os caracteres entre ('') | É possivel adicionar um limite de repeat colocando a quantidade escolhida após a virgula

console.log(umaString.toLocaleUpperCase()) // Transforma a String com letras maiusculas
console.log(umaString.toLocaleLowerCase()) // Transforma a String com letras minusculas
