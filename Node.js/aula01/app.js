// const nome = require('./mod1').nome;
// const mod1 = require('./mod1');
// const { nome, sobrenome, falaNome } = require('./mod1');

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');


axios('https://cristhianalves.netlify.app')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));
// const p1 = new Pessoa('Cristhian');
// console.log(p1);