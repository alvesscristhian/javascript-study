"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers; // Busca o token do insomnia pelo header

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' '); // Extrai o token da header authorization

  try { //                  recebido / original
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET); // Verifica se o JWT é valido
    const { id, email } = dados; // busca id e email dos dados

    const user = await _User2.default.findOne({ // Busca o id e o email do usuario
      where: {
        id,
        email,
      },
    });

    if (!user) { // Checa se os dados buscados são os mesmos do payload
      return res.status(401).json({
        errors: ['Usuário inválido'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
