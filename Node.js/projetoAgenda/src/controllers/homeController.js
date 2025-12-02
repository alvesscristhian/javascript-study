const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    try {
        const agendamentos = await Contato.buscaClientes();
        const user = req.session.user;
        res.render('index', { agendamentos, user });
        return;
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};