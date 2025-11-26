const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const agendamentos = await Contato.buscaClientes();
    res.render('index', { agendamentos });
    return;
};