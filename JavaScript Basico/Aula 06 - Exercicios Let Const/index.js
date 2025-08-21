const nome = 'Cristhian'
const sobrenome = 'Alves dos Santos'
const idade = '18'
const peso = '65'
const alturaEmM = '1.68'

let indiceMassaCorporal
let anoNascimento

indiceMassaCorporal = peso / (alturaEmM * alturaEmM)
anoNascimento = 2025 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)
