function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function tempoMsg(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (msg) !== 'string') {
                reject('CAI NO ERRO E LEVEI TODAS AS PROMISES JUNTO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

// Estados de uma promise = pending/fullfiled/rejected

async function executa() { // Async vai permitir utilizar Await que espera uma promise ser realizada
    try { // Com Async capturamos o erro com try/catch básico
        const fase1 = tempoMsg('Fase 1', 1000);
        console.log(fase1);

        setTimeout(() => {
            console.log('Essa promise estava pendente:', fase1);
        }, 1100)

        const fase2 = await tempoMsg('Fase 2', rand());
        console.log(fase2);

        const fase3 = await tempoMsg('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }

}
executa();

// tempoMsg('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return tempoMsg('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return tempoMsg('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase
//     })
//     .then(fase => console.log('Terminamos na fase:', fase))
//     .catch(erro => console.log(erro));

