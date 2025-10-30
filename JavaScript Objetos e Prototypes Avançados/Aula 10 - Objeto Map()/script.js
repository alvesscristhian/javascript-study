const pessoas = [
    {id: 3, nome: "Cristhian"},
    {id: 2, nome: 'Maryana'},
    {id: 1, nome: 'Danthe'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa })
}
for (const pessoas of novasPessoas) {
    console.log(pessoas);
}
    
