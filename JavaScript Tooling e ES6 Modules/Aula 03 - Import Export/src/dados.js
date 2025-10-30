export const nome = 'Cristhian';
export const sobrenome = 'Alves';
export const idade = 18;
// const cpf = '526.522.918-31'; // Se torna uma variavel privada pois não tem export

export default function soma(x, y) { // Torna uma função "Default", podendo ser importada a qualquer momento com qualquer nome from './dados'
    return x + y;
}

// export { nome as default, sobrenome, idade, soma } // Para tornar uma constante/função default