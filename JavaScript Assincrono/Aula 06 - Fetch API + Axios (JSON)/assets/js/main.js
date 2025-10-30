// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaDadosPag(json));

axios('pessoas.json')
    .then(resposta => carregaDadosPag(resposta.data));

function carregaDadosPag(json) {
    const table = document.createElement('table');
    for (pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.cpf;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}