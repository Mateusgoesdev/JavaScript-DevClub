/*
Estrutura de repetição - For In
 */

const student = {
    name:'caio',
    age: 26,
    genre:'male'
}

for(let property in student) {
    console.log(`${property}: ${student[property]}`)
}