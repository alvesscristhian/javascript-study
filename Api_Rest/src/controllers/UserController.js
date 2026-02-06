import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // Cria um usuário
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll(); // Busca todos os users
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Busca por primary key
      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ // Cria um objeto com todos os erros em um array
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id); // Busca por primary key

      if (!user) {
        return res.status(400).json({ // cria um objeto com todos os erros em um array
          errors: ['Usuário não existe.'],
        });
      }

      const newUser = await user.update(req.body); // Atualiza os dados do usuário com req.body
      return res.json(newUser);
    } catch (e) {
      return res.status(400).json({ // Cria um objeto com todos os erros em um array
        errors: ['E-mail já existe.'],
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({ // Cria um objeto com todos os erros em um array
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id); // Busca por primary key

      if (!user) {
        return res.status(400).json({ // Cria um objeto com todos os erros em um array
          errors: ['Usuário não existe.'],
        });
      }

      await user.destroy(); // Deleta os dados do usuário
      return res.json(user);
    } catch (e) {
      return res.status(400).json({ // Cria um objeto com todos os erros em um array
        errors: ['Erro ao deletar usuário.'],
      });
    }
  }
}

export default new UserController();
