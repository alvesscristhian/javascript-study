const mongoose = require('mongoose'); // Importa o mongoose

const LoginSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    titulo: { type: String, required: true },
    descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema); // Cria um Model do Schema instanciado

class Login {
    constructor(body) {
        this.body = body;
    }
}

module.exports = Login;