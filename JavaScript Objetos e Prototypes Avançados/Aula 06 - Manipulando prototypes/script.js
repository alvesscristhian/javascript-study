function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Vassoura', 50);
// p1.desconto(100);
p1.aumento(100);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    nome: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Tênis'
    }
});
p3.aumento(100);
console.log(p3);


console.log(p1);
console.log(p2);











// const objA = {
//     chaveA: 'A'
// };

// const objB = {
//     chaveB: 'B'
// };

// const objC = {
//     chaveC: 'C'
// };

// //                     obj  proto
// Object.setPrototypeOf(objB, objA); // Pega o prototype de um objeto para outro
// Object.setPrototypeOf(objC, objB);
// console.log(objC.chaveB);