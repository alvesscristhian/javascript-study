// IIFE -> Immediately invoked function expression | Protege a função do escopo global
(function (idade, peso, altura) {

    const sobrenome = 'Alves';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Cristhian'));
    }
    falaNome();
    console.log(idade, peso, altura);
})(18, 67, 1.68);