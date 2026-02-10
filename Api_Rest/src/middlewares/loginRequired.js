import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers; // Busca o token do insomnia pelo header

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required'],
    });
  }

  const [, token] = authorization.split('  '); // Extrai o token da header authorization

  try { //                  recebido / original
    const dados = jwt.verify(token, process.env.TOKEN_SECRET); // Verifica se o JWT é valido
    const { id, email } = dados; // busca id e email dos dados
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido.'],
    });
  }
};
