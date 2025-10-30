function rand(min, max) {
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

// Promise.all() | Promise.race() | Promise.resolve() | Promise.reject()
const promises = [
    tempoMsg('Promise 1', rand(1, 5)),
    tempoMsg('Promise 2', rand(1, 5)),
    tempoMsg('Promise 3', rand(1, 5)),
    tempoMsg(1000, rand(1, 5))
];

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Pagina em cache'); // Entrega a Promise resolvida logo de cara
     // return Promise.reject('Pagina em cache');  // Entrega a Promise errada logo de cara
    }
    else {
        return tempoMsg('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dados => {
        console.log(dados);
    })
    .catch(error => {
        console.log("ERROR", error);
    })

// Promise.race(promises) // Faz uma corrida entre promisses e entrega o primeiro valor entre elas
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => {
//         console.log(erro)
//     });
// Promise.all(promises) // Resolve todos as promessas e depois entrega os valores resolvidos, em caso de erro falha todos
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(erro => {
//         console.log(erro)
//     });