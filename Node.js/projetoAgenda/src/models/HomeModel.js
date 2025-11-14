const mongoose = require('mongoose'); // Importa o mongoose

const HomeSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema); // Cria um Model do Schema instanciado

class Home {

}

module.exports = Home;