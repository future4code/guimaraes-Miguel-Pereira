// --- Exercícios de interpretação de código ---



//1. a.
// Matheus Nachetergaele
// Virginia Cavendish
// Globo 14h

//2. a.
// {nome: "Juca" , idade: 3 , raca: "SRD"}
// {nome: "Juca" , idade: 3 , raca: "SRD" , nome: "Juba"}
// {nome: "Juca" , idade: 3 , raca: "SRD" , nome: "Juba" ,
//  nome: "Juco" , nome: "Jubo"
// b. 
// A sintaxe dos três pontos copia todo o valor que esta dentro do objeto selecionado.

//3. a. 
// false
// undefined
// b.
// O valor false foi impresso pois foi o valor dado para a chave Backender, ja o valor 
// Undefined foi impresso pois nao tem nenhuma chave com valor "altura".



// --- Exercício de escrita de código ---



//1. a.
// const pessoa = {
//     nome: "Miguel",
// apelidos:["Tocchetto", "Mig" , "Mi"]
// }

// function fraseSaida(parametro){
// const fraseDeSaida = console.log(`Eu sou ${parametro.nome}, mas pode me chamar de: ${parametro.apelidos[0]}, ${parametro.apelidos[1]} ou ${parametro.apelidos[2]}`)


//  return fraseDeSaida
// }

// // b.
// const novoApelido = {
//     ...pessoa ,
//     apelidos: ["Migui" , "Migueleu" , "Tocchettinho"]
    
// }


// console.log(fraseSaida(pessoa)) 
// console.log(fraseSaida(novoApelido))

// 2. a.
/* const pessoa1 = {
    nome: "Miguel",
    idade: 23,
    profissao: "estudante"
}
const pessoa2 = {
    nome: "Daniel",
    idade: 26,
    profissao: "empresário"
}

// b.
function imprimirInfos (parametro) {
    let infosPessoa = [
        parametro.nome,
        parametro.nome.length,
        parametro.idade,
        parametro.profissao,
        parametro.profissao.length
    ]

    return  infosPessoa
}

console.log(imprimirInfos(pessoa1))
console.log(imprimirInfos(pessoa2)) */



// 3. a
/* let carrinho = []

//b. 
const fruta1 = {
    fruta1: "goiaba" , disponibilidade: true
} 
const fruta2 = {
    fruta2: "banana", disponibilidade: true
}
const fruta3 = {
    fruta3: "melão" , disponibilidade: true
}


//c.
function adicionarFrutas(parametro) {
    carrinho.push(parametro)
    
    return carrinho
}

console.log("Carrinho" , adicionarFrutas(fruta1))
console.log("Carrinho", adicionarFrutas(fruta2))
console.log("Carrinho", adicionarFrutas(fruta3)) */


// --- Desafios ---


/* 
//1. 
function informacoes(parametro) {
    const nomePessoa = prompt("Qual seu nome?")
    const idadePessoa = prompt("Qual sua idade?")
    const profissaoPessoa = prompt("Qual sua profissão?")

    const respostas = [nomePessoa, idadePessoa, profissaoPessoa]

    return respostas
}

const imprimeInfos = {
    nome: informacoes.nomePessoa,
    idade: informacoes.idadePessoa,
    profissao: informacoes.profissaoPessoa
}

console.log(informacoes(imprimeInfos)) */
