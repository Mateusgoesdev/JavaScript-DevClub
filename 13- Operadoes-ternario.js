/* Operador Ternário ou Condicional

? Se
: Se não
 */

// Preciso transferir meu dinheiro

const balance = true
const isNotBlocked = true
const accountExist = true

const transferOk = balance && isNotBlocked && accountExist ?  'Transferência Realizada' : 'Transferência Negada'

console.log(transferOk)