require('dotenv').config(); // Configura as variaveis ambientes de desenvolvimento (privadas)
const express = require('express'); // Importa o Express
const app = express(); // Inicia o Express
const mongoose = require('mongoose'); // Importa o mongoose (modelador do banco de dados)
mongoose.connect(process.env.CONNECTIONSTRING) // Conecta o mongoose com a chave da base de dados
    .then(() => {
        app.emit('pronto'); // Aplicativo emite um evento sinalizando que o mongoose está pronto
    })
    .catch(e => console.log(e));
const session = require('express-session'); // Identificar o navegador de um cliente, salvando um Cookie com ID do cliente
const MongoStore = require('connect-mongo'); // Salva as sessões dentro da base de dados
const flash = require('connect-flash'); // Mensagens que ao ler são deletadas da base de dados. São salvas em sessão
const routes = require('./routes'); // Rotas da nossa aplicação, exemplo: /home, /contato, etc...
const path = require('path'); // Trabalhar com caminhos de pastas e arquivos
const helmet = require('helmet'); // Protege a aplicação definindo cabeçalhos HTTP de segurança, agindo como middleware
const csrf = require('csurf'); // CSRF Tokens que criamos para nossos formulários, impossibilitando POST's estrangeiros
const { middlewareGlobal, checkCsurfError, sendAllCsurf } = require('./src/middlewares/middleware'); 
// Middlewares = Funções executadas no meio da rota antes/depois de responder o cliente

app.use(helmet()); // Executa o Helmet

app.use(express.urlencoded({ extended: true })); // Libera POST de formulários para dentro de nossa aplicação
app.use(express.json()); // Faz parse de JSON para dentro da aplicação
app.use(express.static(path.resolve(__dirname, 'public'))); // Todos os arquivos estáticos que podem ser acessados diretamente: img,css,js, etc...

const sessionOptions = session({ // Configurações de sessão
    secret: 'id991', // Assinar cookie de ID da sessão
    store: new MongoStore({ mongoUrl: process.env.CONNECTIONSTRING }), // Local de Armazenamento
    resave: false, // Salva novamente?
    saveUninitialized: false, // Salva vazia?
    cookie: { // Sessão do servidor cookie
        //      1seg   1m   1h   1d  7d
        maxAge: 1000 * 60 * 60 * 24 * 7, // Duração do cookie
        httpOnly: true // Acesso somente via HTTP?
    }
});
app.use(sessionOptions); // Usa as configs de sessão
app.use(flash()); // Usa as flashmessages

app.set('views', path.resolve(__dirname, 'src', 'views')); // Views são arquivos que renderizam na tela
app.set('view engine', 'ejs'); // Engine que estamos usando para renderizar HTML

app.use(csrf()); // Configurando CSRF Tokens

// Nossos Middlewares
app.use(middlewareGlobal); // MiddleWare Global
app.use(checkCsurfError); // Middleware Error Token
app.use(sendAllCsurf); // Middleware Envia Token
app.use(routes); // Usando nossas rotas

app.on('pronto', () => { // Escuta o evento e começa a ouvir requisições
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000!');
    });
});;