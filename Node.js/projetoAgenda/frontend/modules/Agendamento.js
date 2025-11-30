export default class Agendamento {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        this.events();
    }

    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }

    validate(e) {
        const el = e.target;
        const nameInput = el.querySelector('input[name="nome"]');
        console.log(nameInput)
        const telInput = el.querySelector('input[name="telefone"]');
        console.log(telInput)
        const serviceInput = el.querySelector('select[name="servico"]');
        console.log(serviceInput)
        const dateInput = el.querySelector('input[name="data"]');
        console.log(dateInput)

        const errorName = document.querySelector('.nome-error');
        const errorTel = document.querySelector('.tel-error');
        const errorService = document.querySelector('.servico-error');
        const errorDate = document.querySelector('.data-error');
        errorName.innerHTML = '';
        errorTel.innerHTML = '';
        errorService.innerHTML = '';
        errorDate.innerHTML = '';

        let error = false;

        if (nameInput.value.length === 0) {
            errorName.innerHTML = 'Nome precisa ser preenchido';
            error = true;
        }

        if (telInput.value.length < 11 || telInput.value.length > 11) {
            errorTel.innerHTML = 'Telefone inválido';
            error = true;
        };

        if (!serviceInput.value) {
            errorService.innerHTML = 'Selecione o serviço';
            error = true;
        };
        
        if (!dateInput.value) {
            errorDate.innerHTML = 'Selecione o dia e hora do agendamento';
            error = true;
        };

        if (!error) el.submit();
    }
}