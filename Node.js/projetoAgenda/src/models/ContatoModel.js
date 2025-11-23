const mongoose = require('mongoose'); // Importa o mongoose
const validator = require('validator');

const ContatoSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    nome: { type: String, required: true },
    telefone: { type: String, required: false },
    servico: { type: String, required: true },
    data: { type: String, required: true },
    criadoEm: { type: Date, default: Date.now }
});

const ContatoModel = mongoose.model('Agendamento', ContatoSchema); // Cria um Model do Schema instanciado

class Contato {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.contato = null;
    }

    static async buscaPorId(id) {
        if (typeof id !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }

    valida() {
        this.cleanUp();
        if (this.body.telefone.length < 11) this.errors.push('Telefone inválido.');
        if (!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
        if (!this.body.telefone) this.errors.push('Telefone é um campo obrigatório.');
        if (!this.body.servico) this.errors.push('Serviço é um campo obrigatório.');
        if (!this.body.data) this.errors.push('Data de agendamento é um campo obrigatório.');
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
            servico: this.body.servico,
            data: this.body.data
        };
    }
}

module.exports = Contato;