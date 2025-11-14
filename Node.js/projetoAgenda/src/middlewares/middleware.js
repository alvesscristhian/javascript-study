exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Valor da váriavel local'; // Envia essa variavel para vies
    next(); // Passa para próxima função
};

exports.checkCsurfError = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404'); // Renderiza erro na tela e intercepta
    }
};

exports.sendAllCsurf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // Cria token e envia para views local
    next(); // Passa para a próxima
};