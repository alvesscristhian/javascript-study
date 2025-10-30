class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }

    checaSequencia() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digitoUm = ValidaCPF.geraDigito(cpfSemDigitos);
        const digitoDois = ValidaCPF.geraDigito(cpfSemDigitos + digitoUm);
        this.novoCPF = cpfSemDigitos + digitoUm + digitoDois;
    }

    static geraDigito(cpfSemDigitos) {
        
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.length !== 11) return false;
        if (this.checaSequencia()) return false;
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}

let validacpf = new ValidaCPF('526.522.918-31');

if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}