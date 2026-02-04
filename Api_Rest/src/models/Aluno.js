import Sequelize, { Model } from 'sequelize'; // Sequelize serve para trocar informações com o banco de dados SQL

export default class Aluno extends Model { // Cria uma modelo de dados Aluno
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
