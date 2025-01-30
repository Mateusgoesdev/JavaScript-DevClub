// Faça um programa que gere um número aleatório entre 1 e 10, esse número 'ganhador'. Então ele irá gerar um número aleatóro entre 1 e 10, e verifica se a pessoa ganhou ou não, se for o gahadador, mostrar que venceu e se perder, mostrar que perdeu

numeroSorteado = Math.floor((Math.random() * (10 - 1) + 1)) 
numeroAleatorio = Math.floor((Math.random() * (10 - 1) + 1))

console.log(numeroSorteado)
console.log(numeroAleatorio)
if(numeroAleatorio == numeroSorteado) {
console.log(`Voce ganhou`)
} else {
    console.log(`Voce perdeu`)}