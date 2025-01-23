/* Operadores typeof e delete
 */

// const myNumber = 20
// const myString = 'olá, sou uma string'

const myObject = {
    name:"joao",
    age: 20,
    height: 1.90
}
delete myObject.height

console.log(myObject)
console.log(typeof myObject)