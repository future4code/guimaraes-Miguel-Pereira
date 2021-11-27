// -- Exercícios de interpretação de código --



//1. 
//let array
//console.log('a. ' , array)
// a. undefined

//array = null
//console.log('b. ' , array)
// b. null

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ' , array.length)
// c. [11]

//let i = 0
//console.log('d. ' , array[i])
// d. 0

//array[i+1] = 19
//console.log('e. ' , array)
//e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

//const valor = array[i+6]
//console.log('f. ' , valor)
// f. 9

//2.
//const frase = prompt("Digite uma frase")
//console.log(frase.toUpperCase().replaceAll("A" , "I") , frase.length)
//SUBI NUM ÔNIBUS EM MIRROCOS 27

// -- Exercícios de escrita de código --



//1.
//let nome = prompt("Qual o seu nome de usuário?")
//let email = prompt("Qual o seu email?")
//console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}.`)

//2.
/*let comidas = ["frango" , "pizza" , "macarrão" , "lasanha" , "churrasco"]
console.log(comidas)
console.log(`Essas são minhas comidas preferidas:
frango
pizza
macarrão
lasanha
churrasco`)

let comidas2 = prompt("Qual sua comida favorita?")
comidas.splice(1, 1, comidas2)
console.log(comidas)*/

//3.
/*let listaDeTarefas = []
tarefa1 = prompt("Digite sua primeira tarefa")
tarefa2 = prompt("Digite sua segunda tarefa")
tarefa3 = prompt("Digite a terceira tarefa")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)

let indice = (prompt("Digite o índice da tarefa feita(0 ,1 ou 2)"))
indiceNumero = Number(indice)

listaDeTarefas.splice(indiceNumero, 1)
console.log(listaDeTarefas)*/



//---- Desafios ----



//1.
/* const frase = () =>{
    const fraseArray = ['Olá','meu','nome','é','Miguel']
 
    return fraseArray
}
console.log(frase().concat())

//2.
const array = ["Banana", "Morango", "Abacaxi","Laranja", "Ameixa"]

    let indice = array[2]
    let tamanho = array[2].length

console.log(`palavra: ${indice} 
Tamanho: ${tamanho}`) */