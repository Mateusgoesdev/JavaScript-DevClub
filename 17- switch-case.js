/* Controle de Fluxo - Condicionais - Switch Case
 */

const temperature = 36

switch (temperature) {
    case 30:
        console.log('A pessoa está com a temperatura muito abaixo do normal')
        break
    case 33:
        console.log('A pessoa está com a temperatura abaixo do normal')
        break
    case 36:
        console.log('A pessoa está com a temperatura normal')
        break
    default:
        console.log('Digite uma temperatura válida')
}