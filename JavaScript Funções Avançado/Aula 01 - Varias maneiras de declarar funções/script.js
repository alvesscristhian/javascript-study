// Declaração de função (Function hoisting = Não precisa chamar a função embaixo dela)
falaOi();
function falaOi() {
    console.log('Oi');
}

// First-class objects (Funções que são declaradas como um dado)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('É uma arrow function')
};
funcaoArrow();

// Dentro de um objeto
const objeto = {
    falar: function() {
        console.log('É uma função em um objeto');
    }
}
objeto.falar();