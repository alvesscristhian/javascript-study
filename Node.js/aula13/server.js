const express = require('express'); // Import Express
const app = express(); // Run express
const routes = require('./routes'); // Import Routes
const path = require('path'); // Import Path Files
const { middlewareGlobal } = require('./src/middlewares/middleware'); // Import Middlewares

app.use(express.urlencoded({ extended: true })); // Parse to req.body

app.use(express.static(path.resolve(__dirname, 'public'))); // Serve arquivo estático

app.set('views', path.resolve(__dirname, 'src', 'views')); // Seta o caminho absoluto do view
app.set('view engine', 'ejs'); // View engine

app.use(middlewareGlobal); // middleWare Global
app.use(routes); // Nossas rotas

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000!');
});
