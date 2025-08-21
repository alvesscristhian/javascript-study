// Declaradas com function*, yield é um return mas sem finalizar o programa
// Para chamar um yield de vez no console: geradora.next()

function* geradora() {
    // Código qualquer...
    yield 'Valor 1';
    // Código qualquer...
    yield 'Valor 2';
    // Código qualquer...
    yield 'Valor 3';
}

const g1 = geradora();
console.log(g1.next());

return ;

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for (let valor of g4) {
    console.log(valor);
}

function* generator5() {
    yield () => console.log('Vim do y1');
    // ....
    yield () => console.log('Vim do y2');
}

const g5 = generator5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();

// const g1 = geradora();
// for (let valor of g1) {
//     console.log(valor);
// }
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());