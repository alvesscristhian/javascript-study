// Let tem escopo de bloco {...}
// Var só tem escopo de função

const verdade = true;

let nome = 'Cristhian'; // criando
var nome2 = 'Cristhian';// criando

if (verdade) {
    let nome = 'Alves'; // criando
    var nome2 = 'Alves'; // redeclarando

    if (verdade) {
        let nome = 'Outra coisa'; // criando
        var nome2 = 'Maria'; // redeclarando
    }
}

console.log(nome, nome2);

var sobrenome = 'Alves';
function falaOi() { // Escopo da função é especial, não pode puxar para fora
    console.log(sobrenome);
}
falaOi();