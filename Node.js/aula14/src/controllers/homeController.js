exports.paginaInicial = (req, res) => { 
    res.render('index'); // Renderiza o arquivo EJS chamado "index.ejs"
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
