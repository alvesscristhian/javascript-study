"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize); // Sequelize serve para trocar informações com o banco de dados SQL
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model { // Cria uma modelo de dados User
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        defaultValue: '', // Valor padrão
        validate: { // Objeto de validação, herda métodos do validator
          len: { // Length
            args: [3, 255], // Argumentos
            msg: 'Campo nome deve ter entre 3 e 255 caracteres', // Mensagem de erro
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email já existe', // Cria mensagem de erro
        },
        validate: {
          isEmail: { // Valida e-mail
            msg: 'E-mail inválido',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL, // Vitual = não é passado para o db
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha precisa ter entre 6 e 50 caracteres',
          },
        },
      },
    }, {
      sequelize,
    });

    this.addHook('beforeSave', async (user) => { // Adiciona um hook que cria um hash
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(password) { // Compara o password com o hash dele
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = User;
