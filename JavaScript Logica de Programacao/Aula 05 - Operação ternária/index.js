// (condição) ? valor true : valor false
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Vip" : "Free";

const corUsuario = 'Red';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
