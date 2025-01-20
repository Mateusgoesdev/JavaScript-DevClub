// Faça um prgrama que imprima na tela se um nome é diferente ao outro nome digitado. porém, os dois nomes devem estar em um mesmo objeto. ex: const object1 = { name:"Joao"}, objetc2 = {name:Maria}, joao e joao, imprime False, Joao e Maria, imprime True

let names = {
    name1: "Mateus",
    name2: "Mateus"
}

let result = names.name1 != names.name2

console.log(result)