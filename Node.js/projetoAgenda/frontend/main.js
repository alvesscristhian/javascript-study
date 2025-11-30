import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Cadastro from './modules/Cadastro'
import Login from './modules/Login';
import Agendamento from './modules/Agendamento';

const login = new Login('.form-login');
const cadastro = new Cadastro('.form-cadastro');
const agendamento = new Agendamento('.form-agendamento');
login.init();
cadastro.init();
agendamento.init();