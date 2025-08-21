function criaRelogio(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaRelogio(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('zerar')){
        console.log('Você clicou em zerar.')
    }
});

iniciar.addEventListener('click', function (evento) {
    clearInterval(timer);
    relogio.classList.remove('pausado');
    iniciaRelogio();
});
pausar.addEventListener('click', function (evento) {
    clearInterval(timer);
    relogio.classList.add('pausado');
});
zerar.addEventListener('click', function (evento) {
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});
