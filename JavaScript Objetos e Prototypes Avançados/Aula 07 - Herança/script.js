// Produto -> aumento, desconto
// 2 coisas especificas: Camiseta -> Cor | Caneca -> Material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // O método .call() é usado em JavaScript para chamar uma função especificando qual será o valor de this.
    this.cor = cor;
} 
Camiseta.prototype = Object.create(Produto.prototype); // Cria objeto vazio no proto de Camiseta seta o proto de Produto
Camiseta.prototype.constructor = Camiseta; // Define o construtor de Camiseta

Camiseta.prototype.aumento = function(percentual) { // Altera o comportamento da função proto de Camiseta
    this.preco = this.preco + (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Bermuda', 50);
const camiseta = new Camiseta('Zara', 50, 'Preta');
const caneca = new Caneca('Caneca', 25, "Ceramica", 5);
caneca.estoque = 100;

console.log(caneca);
console.log(camiseta);
console.log(produto);
