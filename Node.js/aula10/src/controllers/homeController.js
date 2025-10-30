exports.paginaInicial = (req, res) => { 
    res.render('index'); // Renderiza o arquivo EJS chamado "index.ejs"
};

exports.trataPost = (req, res) => {
    res.send('Nova rota de POST');
};
