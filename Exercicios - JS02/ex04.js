// Faça um programa qeu receba 3 números inteiros, e deve imprimir qual o maior e qual é o menor

const numberOne = 1
const numberTwo = 2

if(numberOne > numberTwo) {
    console.log(`O número ${numberOne} é maior e o ${numberTwo} é menor`)
} else if (numberTwo > numberOne) {
    console.log(`O número ${numberTwo} é maior e o ${numberOne} é menor`)
} else {
    console.log('Digite um número válido')
}