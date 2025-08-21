/*
&& -> false && true -> false "o valor mesmo" - após o programa encontrar um false no meio do programa para de checar o resto
|| -> true && false -> vai retornar 'o valor verdadeiro' - após o programa encontrar o primeiro verdadeiro no meio do programa para de checar o resto

PRIMEIRO VERDADEIRO É MOSTRADO || ULTIMO FALSO É MOSTRADO

---------- FALSY VALUE ---------- (Retornam valores bool falso)
false
0
"" '' ``
null / undefined
NaN
*/
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);




const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);



function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Joaozinho';

console.log(vaiExecutar && falaOi());