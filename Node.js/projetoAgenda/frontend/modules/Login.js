import validator from 'validator';

export default class Login {
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
        const userInput = el.querySelector('input[name="usuario"]')
        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        
        const errorUser = document.querySelector('.erro-user');
        const errorEmail = document.querySelector('.erro-email');
        const errorPassword = document.querySelector('.erro-password');

        let error = false;

        if (userInput.value.length == 0) {
            errorUser.innerHTML = 'Usuário não pode estar vazio';
            error = true;
        }

        if (!validator.isEmail(emailInput.value)) {
            errorEmail.innerHTML = 'E-mail inválido';
            error = true;
        };

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            errorPassword.innerHTML = 'Senha precisa ter entre 3 e 50 caracteres';
            error = true;
        };

        if (!error) el.submit();
    }
}