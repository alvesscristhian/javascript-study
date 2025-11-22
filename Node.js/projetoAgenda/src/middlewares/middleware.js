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

exports.loginRequired = (req, res, next) => {
    if (!req.session.user) { // Se o usuario não tiver uma sessão ativa não roda
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => {
            res.redirect('/');
            return;
        });
        return;
    }
    next();
};