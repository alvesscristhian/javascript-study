import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers; // Busca o token do insomnia pelo header

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split(' '); // Extrai o token da header authorization

  try { //                  recebido / original
    const dados = jwt.verify(token, process.env.TOKEN_SECRET); // Verifica se o JWT é valido
    const { id, email } = dados; // busca id e email dos dados

    const user = await User.findOne({ // Busca o id e o email do usuario
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
