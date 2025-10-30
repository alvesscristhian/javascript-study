import soma from './dados' // Sem chaves = Importa somente um default da exportação e armazena em uma var
console.log(soma(5, 5));

// import * as MeuModulo from './dados'; // Importa tudo e renomeia para uma 'variavel' só
// console.log(MeuModulo);

// import { nome as nome2, sobrenome, idade, soma, Pessoa as UmaClasse } from './dados'; // Importa item por item e usa "as para renomear"

// const p1 = new UmaClasse('Cristhian', 'Alves');

// console.log(p1);
// console.log(soma(100, 500));
