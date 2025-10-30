// 705.484.450-52 070.987.720-03
/*

11 - (resultado % 11) = (Primeiro digito)
Se resultado for > 9 consideramos 0

11 - (resultado % 11) = (Segundo digito)
Se resultado for > 9 consideramos 0

*/
function ValidaCPF(cpfEnviado) { // Criação da função construtora
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () { // Getter para obter o cpf e limpar
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () { // Prototype de um método que valida CPF
    if (typeof this.cpfLimpo === undefined) return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digitoUm = this.criaDigito(cpfParcial);
    const digitoDois = this.criaDigito(cpfParcial + digitoUm);

    const novoCpf = cpfParcial + digitoUm + digitoDois;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) { // Prototype de um método que cria o primeiro e segundo digito do CPF validado
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1;
    let total = cpfArray.reduce((acumulador, valor) => {
        acumulador += (Number(valor) * contador);
        contador--;
        return acumulador;
    }, 0);

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () { // Prototype de um método que barra sequências
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}

const cpf = document.querySelector('#cpf');
const btn = document.querySelector('#btn-validar');
const resultado = document.querySelector('#resultado');
btn.addEventListener("click", function () {
    const cpfUsuario = new ValidaCPF(cpf.value);
    const valido = cpfUsuario.valida();

    if (valido) {
        resultado.innerHTML = "✅ CPF Válido!";
        resultado.style.backgroundColor = "green";
        
        setTimeout(() => { // Exibe uma mensagem de pop up por 2 segundos
            resultado.innerHTML = '';
            resultado.style.backgroundColor = "unset";
        }, 2000);
    } else {
        resultado.innerHTML = "❌ CPF Inválido ou Incompleto!";
        resultado.style.backgroundColor = "red";
        
        setTimeout(() => { // Exibe uma mensagem de pop up por 2 segundos
            resultado.innerHTML = '';
            resultado.style.backgroundColor = "unset";
        }, 2000);
    }
});
