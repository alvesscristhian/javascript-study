import Sequelize, { Model } from 'sequelize'; // Sequelize serve para trocar informações com o banco de dados SQL
import bcryptjs from 'bcryptjs';

export default class User extends Model { // Cria uma modelo de dados User
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '', // Valor padrão
        validate: { // Objeto de validação, herda métodos do validator
          len: { // Length
            args: [3, 255], // Argumentos
            msg: 'Campo nome deve ter entre 3 e 255 caracteres', // Mensagem de erro
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL, // Vitual = não é passado para o db
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

    this.addHook('beforeSave', async (user) => { // Adiciona um hook
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });

    return this;
  }
}
