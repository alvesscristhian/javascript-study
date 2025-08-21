// Crie um programa que peça uma senha ao usuário e verifique:

// Se a senha tiver pelo menos 8 caracteres, exiba "Senha válida".

// Caso contrário, exiba "Senha muito curta".

function pegarSenha() {
    const senha = prompt('Digite sua senha:')
    return senha
}
const senha = pegarSenha()

function verificarSenha(senha) {
    if (senha.length >= 8) {
        alert('Senha valida!');
        return
    } else {
        alert('Senha muito curta!');
        return
    }
}

verificarSenha(senha);