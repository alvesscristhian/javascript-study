const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('home')
    res.render('login');
};
exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        };

        req.flash('success', 'Seu cadastro foi bem sucedido!');
        req.session.save(function () { // Salva os dados da sessão
            return res.redirect('/login/index'); // Redireciona a página
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('/login/index');
            });
            return;
        };

        req.flash('success', 'Seu login foi bem sucedido!');
        req.session.user = login.user; // Armazena dados do usuário em uma sessão
        req.session.save(function () {
            return res.redirect('/login/index');
        });
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = function(req, res) {
    req.session.destroy(); // Destruir a sessão do usuário no servidor para logouts
    res.redirect('/')
}