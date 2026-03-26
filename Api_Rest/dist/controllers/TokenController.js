"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body; // Valor padrão do email e password é nulo

    if (!email || !password) { // Checa se o usuário não enviou email ou senha
      return res.status(401).json({
        errors: ['Credenciais inválidas.'],
      });
    }

    const user = await _User2.default.findOne({ where: { email } }); // Busca um usuario com email cadastrado

    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe.'],
      });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida.'],
      });
    }

    const { id } = user;
    // Recebe os dados (payload), Usa uma chave secreta (secret), Define opções (opcional)
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token });
  }
}

exports. default = new TokenController();
