// Uma função que funciona como um loop, executa e é chamada novamente caso esteja na condição

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);