// 8. Menu de Opções
// Crie um menu usando switch com as seguintes opções:

// 1. Ver saldo
// 2. Fazer depósito
// 3. Sair

// Peça ao usuário para digitar uma opção (1, 2 ou 3) e exiba uma mensagem correspondente.

let saldo = 0;
Number(saldo);

function mostrarMenu() {
    return prompt('Escolha uma das opções \n1. Ver saldo \n2. Fazer depósito\n3. Sair ');
}

function verSaldo() {
    return alert(`Seu saldo é ${saldo}`);
}

function fazerDeposito() {
    const valor = Number(prompt('Digite o valor do depósito:'));
    if (!isNaN(valor) && valor > 0) {
        saldo += valor;
        return alert('Depósito concluido!');
    } else {
        return alert('Valor invalido!');
    }
}

function iniciarApp() {
    let opcoes

    while (opcoes !== '3') {
        opcoes = mostrarMenu()

        switch (opcoes) {
            case '1': {
                verSaldo();
                break;
            }
            case '2': {
                fazerDeposito();
                break;
            }
            case '3': {
                alert('Encerrando...')
                break;
            }
            default: {
                alert('Opção incorreta')
            }
        }
    }
}
iniciarApp();