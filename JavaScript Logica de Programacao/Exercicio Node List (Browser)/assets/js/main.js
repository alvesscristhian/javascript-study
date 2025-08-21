const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const corDeFundoBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = corDeFundoBody;
    p.style.color = '#FFF';
}