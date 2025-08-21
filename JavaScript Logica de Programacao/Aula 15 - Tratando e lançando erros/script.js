function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros');
    }
    return x + y;
}

try {
    // É executada quando NÃO há erros
    console.log(a)
    console.log('Abri um arquivo');
    console.log('Manipulei um arquivo e gerou erro')
    console.log('Fechei o arquivo')
} catch (e) {
    // É executada quando há erros
    console.log('Tratando o erro');
} finally {
    // Executado sempre
    console.log('Eu sempre sou executado');
}


function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    // Tratar erro
    console.log(e)
} finally {
    console.log('Tenha um bom dia')
}
