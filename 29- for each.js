// For Each

const students = [
    {name:'João', age: 55},
    {name:'Maria', age: 34},
    {name:'Brenda', age: 46},
    {name:'Julia', age: 26},
    {name:'Pedro', age: 21},
    {name:'Claudio', age: 73},
    {name:'Cleber', age: 28},
]
let allStudentsAge= 0

students.forEach((students,index,) => {
    allStudentsAge = allStudentsAge + students.age
}
)

const averageAge = allStudentsAge / students.length

console.log(`a média dos alunos é ${averageAge}.`)