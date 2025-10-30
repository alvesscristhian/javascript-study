const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' }); // Cria um novo arquivo (local | conteudo | flag: a ou w)
}

