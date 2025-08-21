// Object.defineProperty(singular) | Object.defineProperties(plural)

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar chave?
        value: estoque, // valor
        writable: false, // alterações?
        configurable: true // configurável?
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostrar chave?
            value: nome, // valor
            writable: false, // alterações?
            configurable: true // configurável?
        },
        preco: {
            enumerable: true, // mostrar chave?
            value: preco, // valor
            writable: false, // alterações?
            configurable: true // configurável?
        }
    })
}

const produto1 = new Produto('Bicicleta', 1000, 5)
produto1.estoque = 10;
console.log(Object.keys(produto1));