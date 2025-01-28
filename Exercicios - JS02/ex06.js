// Faça um programa onde leia um número e diga se ele é ímpar ou par.

let number = 3
let par = number % 0
let impar = !(number % 0)

if(number == par) {
    console.log(`O número ${number} é par`)
} else if (number == impar) {
    console.log(`O número ${number} é ímpar`)
} else {
    console.log(`Digite um número válido`)
}