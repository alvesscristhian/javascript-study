// Peça ao usuário sua idade e informe:
// Se for menor de 18, exiba: "Menor de idade".
// Se for 18 ou mais, exiba: "Maior de idade".

const idadeUsuario = prompt('Digite sua idade:');

function verificaçãoIdade(idadeUsuario) {
    const verificacao = idadeUsuario >= 18 ? 'Maior de idade' : 'Menor de idade';
    return alert(verificacao);
}
verificaçãoIdade(idadeUsuario);