//               0            1           2          3         4
const alunos = ['Cristhian', 'Giovanni', 'Bonazzi', 'Danthe', 'Raik']

console.log(typeof alunos) // O array tem o typeof = object
console.log(alunos instanceof Array) // Para saber se um array é um array use instanceof

console.log(alunos.slice(0, -2)) // Fatia um array subtraindo os ultimos elementos usando -
console.log(alunos.slice(0, 4)) // Podemos fatiar um array declarando 'inicio' , 'fim (Obs: um a mais)'
console.log(alunos[50]) // Podemos acessar um indice que não existe no array!
delete alunos[2] // Deleta um elemento do array sem alterar o indice
alunos.shift() // Exclui o primeiro elemento do array
alunos.pop() // Exclui o ultimo elemento do array
alunos.unshift('Maryana') // Adiciona um elemento no inicio do array
alunos.push('Rangel') // Adiciona no fim do array (MELHOR METODO)
alunos[alunos.length] = 'Maryana' // Pega o tamanho do array e adiciona no final
alunos[0] = 'Maryana' // Altera o valor do elemento [0] do array
alunos[5] = 'Luiza' // Adiciona um elemento no array

console.log(alunos) // Mostra na tela
console.log(alunos[0]) // Mostra na tela
console.log(alunos[4]) // Mostra na tela
