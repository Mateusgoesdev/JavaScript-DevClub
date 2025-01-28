// Faça um programa onde os jurados vão dar a explicação para cada nota dada, são permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente,

nota = 5

switch(nota) {
    case 0:
        console.log(`Nota ${nota}, pior apresentação`)
        break
    case 1:
        console.log(`Nota ${nota}, Muito ruim a apresentação`)
        break
    case 2:
        console.log(`Nota ${nota}, Deixou a desejar a apresentação`)
        break
    case 3:
        console.log(`Nota ${nota}, Apresentação muito abaixo`)
        break
    case 4:
        console.log(`Nota ${nota}, Poderia ser melhor a apresentação`)
        break
    case 5:
        console.log(`Nota ${nota}, Mediano a apresentação`)
        break
    case 6:
        console.log(`Nota ${nota}, Boa apresentação`)
        break
    case 7:
        console.log(`Nota ${nota}, Muito boa apresentação`)
        break
    case 8:
        console.log(`Nota ${nota}, Apresentação top`)
        break
    case 9:
        console.log(`Nota ${nota}, Excelente apresentação`)
        break
    case 10:
        console.log(`Nota ${nota}, A melhor apresentação`)
        break
    default:
        console.log(`Nota inválida`)
}