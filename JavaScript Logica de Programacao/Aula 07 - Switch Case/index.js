function getDaySemana(diaSemana) {
    let diaSemanaText;
    
    switch (diaSemana) {
    case 0:
        diaSemanaText = 'Domingo';
        return diaSemanaText
    case 1:
        diaSemanaText = 'Segunda';
        return diaSemanaText
    case 2:
        diaSemanaText = 'Terça';
        return diaSemanaText
    case 3:
        diaSemanaText = 'Quarta';
        return diaSemanaText
    case 4:
        diaSemanaText = 'Quinta';
        return diaSemanaText
    case 5:
        diaSemanaText = 'Sexta';
        return diaSemanaText
    case 6:
        diaSemanaText = 'Sábado';
        return diaSemanaText
    default: // Funciona como um else
        diaSemanaText = '';
        return diaSemanaText
    };
};
const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaText = getDaySemana(diaSemana);
console.log(diaSemana, diaSemanaText);
