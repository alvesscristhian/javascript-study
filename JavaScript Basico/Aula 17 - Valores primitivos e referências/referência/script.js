// Primitivos (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol)
let a = 'A';
let b = a; // Valores copiados
console.log(a, b);

// Referência (Mutável) - array, object, function
let a = [1, 2, 3];
let b = a; // Passados por referência
let b = [...a]; // Copia o valor de A para o B
console.log(a, b);