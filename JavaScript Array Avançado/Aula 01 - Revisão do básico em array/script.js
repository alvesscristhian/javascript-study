// Valor por referência - Reflete os valores dos dois arrays, vira um espelho
// const novo = [...nomes]; -- Pega todos os dados do array antes dos '...' e agora não reflete nos dois

// shift/unshift - Remove/adiciona valores no começo do array
// pop/push - Remove/adiciona valores no final do array // Tecnicamente melhor utilizado
// split - Remove caracteres de uma string e add em um array
// join - Une todos os valores do array

/*                  0           1           2         3        4
const nomes = ['Cristhian', 'Maryana', 'Matheus', 'Marcela', 'Max'];
const novo = nomes.slice(0, -2); 
*/


 const nome = 'Cristhian Alves Santos';
 const nomes = nome.split(' ');

 console.log(nomes);

// const nomes = [ 'Cristhian', 'Alves', 'Santos' ];
// const nomeCompleto = nomes.join(' ');
// console.log(nomeCompleto);