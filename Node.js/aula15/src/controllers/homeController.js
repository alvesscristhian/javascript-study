exports.paginaInicial = (req, res) => { 
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index'); // Renderiza o arquivo EJS chamado "index.ejs"
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
