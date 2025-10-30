class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância -> São dependentes de um objeto instanciado pela class para serem executado
    aumentarVolume() {
        this.volume += 5;
    }
    diminuirVolume() {
        this.volume -= 5;
    }

    // Método estático -> Seu this aponta para a classe, não são dependentes de um objeto instânciado para ser chamado
    static metodoEstatico() {
        console.log('Olá, soou um método estático', this);
    }
}

const lg = new ControleRemoto('LG K50');
console.log(lg);