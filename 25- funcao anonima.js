// Função anônima 

const sum = function (number1,number2) {

    const result = number1 + number2
    return result
}

const firstNumber = 10
const secondNumber= 20

console.log(`O primeiro número é ${firstNumber}`)
console.log(`O segundo número é ${secondNumber}`)

const result = sum(firstNumber,secondNumber)

console.log(`E a soma dos dois é ${sum(firstNumber,secondNumber)}`)
console.log(result)