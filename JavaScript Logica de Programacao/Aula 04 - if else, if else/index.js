/* 
Entre 0 - 11 say: Bom dia
Entre 12 - 17 say: Boa tarde
Entre 18 - 23 say: Boa noite
*/
const hora = 22.59;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {
    console.log('Olá');
}


const tenhoGrana = 'Luiz';

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Vou ficar em casa');
}