// Calculadora

const calculate = (Number1, Number2, operation) => {

    let result
    switch (operation) {
        case "+":
            result = Number1 + Number2
            break
    
        case "-":
            result = Number1 - Number2
            break

        case "*":
            result = Number1 * Number2
            break

        case "/":
            result = Number1 / Number2
            break
        
        default:
            result = Number1 + Number2
            break
        
    }
    return result
}

console.log(calculate(2,4,"/"))