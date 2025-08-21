// Escopo léxico = Todo lugar que você pode acessar a variavel, sempre buscada no escopo maior até chegar no global

const nome = 'Cristhian';

function falaNome() {
    console.log(nome)
}
function usaFalaNome() {
    falaNome();
};
usaFalaNome();