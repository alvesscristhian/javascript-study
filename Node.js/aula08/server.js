const express = require('express');
const app = express();
app.use(express.urlencoded({ extends: true }));

app.get('/', (req, res) => { 
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>
    `); 
});

// Tudo que vem depois de / é parâmetro depois de ? é queryString = Query que fazem na url

app.get('/testes/:idUsuarios?/:opcional?', (req, res) => { // Setamos a rota que desejamos receber os parâmetros com um ':NomeRota' | Ao colocar um ? informa que pode ser opcional
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.nome);
});

app.post('/', (req, res) => {
    console.log(req.body); // Pega o formulário da requisição e traz para o corpo
    res.send(`O que você me enviou foi ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});
