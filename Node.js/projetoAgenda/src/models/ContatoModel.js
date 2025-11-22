const mongoose = require('mongoose'); // Importa o mongoose
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    titulo: { type: String, required: true },
    descricao: String
});

const ContatoModel = mongoose.model('Contato', ContatoSchema); // Cria um Model do Schema instanciado

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.Contato = null;
    }

    register() {
        this.valida();
    }

    valida() {
        this.cleanUp();
        if (!validator.isMobilePhone('(13) 98837-2703', 'pt-BR'));
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        };

        this.body = {
            nome: this.body.nome,
            telefone: this.body.telefone,
        };
    }
}

module.exports = Contato;