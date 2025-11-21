const mongoose = require('mongoose'); // Importa o mongoose
const validator = require('validator'); // Validador de email com isEmail()
const bcryptjs = require('bcryptjs'); // Cria hash de senha do usuário

const LoginSchema = new mongoose.Schema({ // Cria uma instância de um schema para o mongoose, servindo para declarar e modelar dados
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema); // Cria um Model do Schema instanciado

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.valida();
        if (this.errors.length > 0) return;
        this.user = await LoginModel.findOne({ email: this.body.email }); // Primeiro documento que responde na busca especifica

        if (!this.user) {
            this.errors.push('Usuário ou senha inválida.');
            return;
        }

        // Body = dados do form | User = dados do usuario instanciado na base de dados
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) { // Compara a senha com o hash que está no MongoDB
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }


    }

    async register() {
        this.valida();
        if (this.errors.length > 0) return;

        await this.userExists();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync(); // Gera um salt, que é um valor aleatório usado para tornar o hash mais seguro.
        this.body.password = bcryptjs.hashSync(this.body.password, salt); // Combina com o salt gerado e gera um hash criptografado.

        this.user = await LoginModel.create(this.body); // Instancia na base de dados utilizando o model, após todas os cheks
    }

    async userExists() {
        this.user = await LoginModel.findOne({ email: this.body.email });
        if (this.user) this.errors.push('Usuário já existe.');
    }

    valida() {
        this.cleanUp();
        if (!validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        };
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        };

        this.body = {
            usuario: this.body.usuario,
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;