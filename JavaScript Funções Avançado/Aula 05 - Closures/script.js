// Closures é basicamente a capacidade de uma funcao ter uma outra funcao e essa funcao ter a capacidade de acessar o escopo lexico e retorna dentro dessa funcao, alguma coisa que esteja no escopo lexico.

function retornaFuncao() { // ESCOPO MÃE
    const nome = 'Cristhian';
    return function () { 
        return nome; // retorno o nome que esta no escopo lexico
    };
}

const funcao = retornaFuncao(); // retorna a funcao anonima
console.dir(funcao);