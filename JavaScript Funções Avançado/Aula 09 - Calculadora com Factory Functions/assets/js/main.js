// This está referenciado a constante calculadora.

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() { // Atributos para cima
            this.cliqueBotoes();
            this.pressionaEnter();
        },         // Métodos para baixo

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => { // Arrow function não permite alteração do this
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

                this.display.focus();
            }); // .bind(this) É usado para usar o this no escopo externo(cliqueBotoes)
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clearDisplay() {
            this.display.value = '';
        },
        apagaUm() {
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('A conta é inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('A conta é inválida!');
                return;
            }
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); // This é a calculadora pois elá que esta chamando o inicio