// Object.defineProperty(singular) | Object.defineProperties(plural)

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostrar chave?
        configurable: true, // configurável?
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Deve ser um número!');
            }
            
            estoquePrivado = valor;
        }
    });
}
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    }
}

const p1 = new Produto('Camiseta', 50, 5)
p1.estoque = 'Sou um número';
console.log(p1.estoque);

const p2 = criaProduto('Cristhian');
p2.nome = 'Qualquer coisa.'
console.log(p2.nome);