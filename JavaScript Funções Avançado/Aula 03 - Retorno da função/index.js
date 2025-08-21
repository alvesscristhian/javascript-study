// return - Retorna um valor - Termina a função

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(5));
console.log(triplica(10));
console.log(quadriplica(100));


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));


function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome }
}
const p1 = criaPessoa('Cristhian', 'Alves');
const p2 = criaPessoa('Maryana', 'Rezende');

console.log(p1, p2);

function soma(a, b) {
    return a + b;
}
const valor1 = soma(5, 2)
console.log(valor1)