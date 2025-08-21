// Continue - continua para a próxima iteração
// Break - sai do laço

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o numero 2');
        continue; // Se a condição for true, ele pula para proxima iteração do laço
    }

    console.log(numero);
    
    if (numero === 7) {
        console.log('7 encontrado! Saindo...');
        break; // Se a condição for true, ele para o laço
    }
}