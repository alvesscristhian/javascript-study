require('dotenv').config(); // Importa e configura o dotenv

const express = require('express'); // Import Express
const app = express(); // Run express
const mongoose = require('mongoose'); // Import Mongoose

mongoose.connect(process.env.CONNECTIONSTRING) // Importa a chave do .env e roda o Mongoose
    .then(() => { // Resolve a promise da conexão
        app.emit('pronto'); // Cria um evento que emite um sinal
    })
    .catch(e => console.log(e)); // Captura um possivel erro e trata

const session = require('express-session'); // Import Express Session
const MongoStore = require('connect-mongo'); // Import MongoStore
const flash = require('connect-flash'); // Import Flash Messages
const routes = require('./routes'); // Import Routes
const path = require('path'); // Import Path Files
const { middlewareGlobal } = require('./src/middlewares/middleware'); // Import Middlewares

app.use(express.urlencoded({ extended: true })); // Parse to req.body
app.use(express.static(path.resolve(__dirname, 'public'))); // Serve arquivo estático

const sessionOptions = session({ // Session Configs
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
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')); // Seta o caminho absoluto do view
app.set('view engine', 'ejs'); // View engine

app.use(middlewareGlobal); // middleWare Global
app.use(routes); // Nossas rotas

app.on('pronto', () => { // Chama o evento e declara o callback
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000!');
    });
});
