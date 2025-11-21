exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkCsurfError = (err, req, res, next) => {
    if (err) {
        return res.render('404'); // Renderiza erro na tela e intercepta
    }

    next();
};

exports.sendAllCsurf = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken(); // Cria token e envia para views local
    next(); // Passa para a próxima
};