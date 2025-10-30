// No terminal - node server.js | Para executar o seu servidor
const express = require('express');
const app = express();
//         CRIAR   LER   ATUALIZAR APAGAR
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST    GET   PUT     DELETE

// https://salaomegamomento.com.br/ <- GET = Entregar página /
// https://salaomegamomento.com.br/sobre <- GET = Entregar página /sobre
// https://salaomegamomento.com.br/contato <- GET = Entregar página /contato

app.get('/', (req, res) => { // Cliente faz requesição | Servidor da resposta
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Enviar formulário</button>
        </form>
    `); 
});

app.post('/', (req, res) => {
    res.send('Recebi o form');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco!'); // .send -> Envia uma resposta do servidor
})

app.listen(3000, () => { // .listen -> Faz o servidor escutar na PORTA ditada como parâmetro
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});
