//  --- Exercícios de interpretação de código --



//1- 
//    function minhaFuncao(variavel) {
//    return variavel *5
//}
//console.log(minhaFuncao(2))
//console.log(minhaFuncao(10))

//a. 10
//   50
//b. não apareceria nada pois precisa do console.log para que o restuda seja impresso no console.

//2.
/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */

//a. Esta função fará com que a mensagem escrita pelo usuário seja impressa no console toda em
//letras minúsculas e diga se a string cenoura está ou não presente na frase impressa.
//b. true
//   true
//   true



//  --- Exercícios de escrita de código ---



//1. a.
/* function sobreEu(){

"Eu sou Miguel, tenho 22 anos, moro em Porto Alegre e sou estudante"

}
console.log(sobreEu) */
//b.
//function infos(nome, idade, endereco, profissao) {
  // console.log(nome, idade, endereco, profissao)
//   console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`) 
 
//}
//infos("Miguel", 22, "Porto Alegre", "empresário")

//2. a.
/* const somaDosNumeros =  (numero1 , numero2) => {
    return  numero1 + numero2
  }
  
  console.log(somaDosNumeros(4, 8)) */

//b. 
/* const compararNumeros = (numero1 , numero2) => {
    return numero1 >= numero2
}

console.log(compararNumeros(6, 4)) */

//c.
/*const numeroPar = (numero) => {

    return numero %2 ==0
}

console.log(numeroPar(48))*/

//d.
/* function mensagem(texto) {
let maiuscula = texto.toUpperCase()
let tamanho = texto.length

return maiuscula + ". Tamanho:" + tamanho
    
}
console.log(mensagem(prompt("Digite algo"))) */

//3.
/* function soma(num1, num2){

    let soma = num1 + num2

    return soma
}

function subtracao(num1, num2){

    let subtracao = num1 - num2

    return subtracao
}

function divisao(num1, num2){

    let divisao = num1 / num2

    return divisao
}

function multiplicacao(num1, num2){

    let multiplicacao = num1 * num2 

    return multiplicacao
}

let a = Number(prompt("Digite um número"))
let b = Number(prompt("Digite outro número"))

console.log(soma(a,b))
console.log(subtracao(a,b))
console.log(multiplicacao(a,b))
console.log(divisao(a,b)) */



//---- Desafios ----



//1. a.

const funcao1 = (num1) => {
    const numero = num1

    return numero
}
console.log(funcao1(5))

// b.
const funcao2 = (num2, num3) => {
    const soma = num2 + num3
}
console.log(funcao2(4, 5))