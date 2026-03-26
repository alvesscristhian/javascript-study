"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body); // Cria um usuário
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] }); // Mostra apenas 3 dados
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id); // Busca por primary key

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId); // Busca por primary key

      if (!user) {
        return res.status(400).json({ // cria um objeto com todos os erros em um array
          errors: ['Usuário não existe.'],
        });
      }

      const novosDados = await user.update(req.body); // Atualiza os dados do usuário com req.body
      const { id, nome, email } = novosDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({ // Cria um objeto com todos os erros em um array
        errors: ['E-mail já existe.'],
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId); // Busca por primary key

      if (!user) {
        return res.status(400).json({ // Cria um objeto com todos os erros em um array
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy(); // Deleta os dados do usuário
      return res.json(null);
    } catch (e) {
      return res.status(400).json({ // Cria um objeto com todos os erros em um array
        errors: ['Erro ao deletar usuário.'],
      });
    }
  }
}

exports. default = new UserController();
