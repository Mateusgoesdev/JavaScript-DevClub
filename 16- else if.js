/* Controle de Fluxo - Condicionais - Else if

if = Se
else = Se não
Else if = Mais se...
 */

const temperature = 36

if (temperature >= 36 && temperature <= 39) {
    console.log(' Pessoa Saudável')
} else if (temperature > 39){
    console.log('Pessoa está com febre')
} else {
    console.log('Temperatura muito baixa, procure um médico')
}