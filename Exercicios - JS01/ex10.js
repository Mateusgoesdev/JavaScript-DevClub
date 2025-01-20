// Faça um prgrama que imprima na tela se um nome é diferente ao outro nome digitado. porém, os dois nomes devem estar em um mesmo objeto. ex: const object1 = { name:"Joao"}, objetc2 = {name:Maria}, joao e joao, imprime False, Maria e Maria, imprime True

// Faça um prgrama que imprima na tela se um nome é igual ao outro nome digitado. porém, os dois nomes devem estar em objetos separados. ex: const object1 = { name:"Joao"}, objetc2 = {name:Maria}, joao e joao, imprime True, Maria e Maria, imprime False

let name1 = {
    name: "Mateus"
}

let name2 = {
    name: "false"
}

let result = name1.name == name2.name

console.log(result)