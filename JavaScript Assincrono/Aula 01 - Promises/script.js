/*
Promises são uma forma de lidar com operações assíncronas em JavaScript, oferecendo uma alternativa mais organizada que os callbacks (evitando o famoso callback hell).

Quando você cria uma Promise, recebe duas funções como parâmetros:

resolve: usada para indicar que a operação foi concluída com sucesso;
reject: usada para indicar que a operação falhou ou deu algum erro.

➡️ A analogia com if/else até ajuda a entender, mas não é exatamente isso. Na prática:

Se você chama resolve(valor), o .then() é executado e recebe esse valor.
Se você chama reject(erro), o .catch() é executado e recebe esse erro.

*/
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function tempoMsg(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof(msg) !== 'string') return reject(new Error('BAD VALUE'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

tempoMsg('Conexão com o BD', rand(1, 3)).then(resposta => {
    console.log(resposta);
    return tempoMsg('Buscando dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return tempoMsg(111111, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
}).then(() => {
    console.log('Exibe dados na tela');
}).catch((error) => {
    console.log('Erro:',error);
})

console.log('Isso exibe primeiro');