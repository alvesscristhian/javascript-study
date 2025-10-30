const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // Diretorio do arquivo | Nome do arquivo
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     {nome: 'Maraya'},
//     {nome: 'Cristhian'},
//     {nome: 'Docky'},
//     {nome: 'Toddy'},
// ];

// const json = JSON.stringify(pessoas, '', 2); // Converte objetos para JSON
// escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); // Converte JSON para objetos
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);

