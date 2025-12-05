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

    async register() {
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.create(this.body);
    }

    valida() {
        this.cleanUp();
        if (this.body.telefone.length !== 11 || this.body.telefone.length > 11) this.errors.push('Telefone inválido.');
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
            data: this.formataData(this.body.data)
        };
    };

    async edit(id) {
        if (typeof id !== 'string') return;
        this.valida();
        if (this.errors.length > 0) return;
        this.contato = await ContatoModel.findByIdAndUpdate(id, this.body, { new: true }); // Faz uma busca pelo ID e atualiza os dados do body
    };
    
    formataData(dataDB) {
        const data = new Date(dataDB);

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = String(data.getFullYear());

        const horas = String(data.getHours()).padStart(2, "0");
        const minutos = String(data.getMinutes()).padStart(2, "0");

        return `${dia}/${mes}/${ano} - ${horas}:${minutos}`
    }


    // Métodos etáticos
    static async buscaPorId(id) {
        if (typeof id !== 'string') return;
        const user = await ContatoModel.findById(id);
        return user;
    };

    static async buscaClientes() {
        // .sort(): É usado para ordenar os resultados retornados por uma operação de consulta (como o .find())
        const agendamentos = await ContatoModel.find().sort({ criadoEm: -1 }); // 1 para ordem crescente e -1 para ordem decrescente
        return agendamentos;
    };

    static async delete(id) {
        if (typeof id !== 'string') return;
        const agendamento = await ContatoModel.findOneAndDelete({ _id: id }); // Busca pelo ID e delete da base de dados
        return agendamento;
    };
};

module.exports = Contato;