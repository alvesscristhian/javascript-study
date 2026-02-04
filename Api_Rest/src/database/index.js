import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User]; // Armazena todos os models em um Array

const connection = new Sequelize(databaseConfig); // Instância de um Sequelize com configs do banco

models.forEach((model) => model.init(connection));
