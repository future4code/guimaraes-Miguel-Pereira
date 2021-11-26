//---- Exercícios de interpretação de código ----



// 1. a. 
//   O teste verifica se um número inserido pelo usuário é ou não um número par.
//  Resultando a frase: Passsou no teste, se o número for par ou então: Não Passsou
//  no teste, se o número não for par.

// b.
// Imprimira a frase para números pares.

// c.
// Imprimira a frase para números ímpares.

// 2. a.
// O código informa ao usuário o valor da fruta que ele escolher.

// b.
// O preço da fruta Maçã é, R$ 2.25

// c.
// O preço da fruta é, R$ 5

// 3. a.
// A primeira linha solicita ao usuário que digite um número.

// b.
// se a mensagem digitada for 10 aparecer a frase: Esse número passou no teste.
// Se a mensagem digitada for -10 não aparecera nenhuma mensagem

// c.
// Sim. Esse erro ocorre pois a variável let possui escopo de bloco, o que não permite
// que a variável seja indentificada apenas dentro do seu bloco.



//---- Exercícios de escrita de código ----



// 1.
/* const idadeUsuario = Number(prompt("Qual a sua idade?"))

if(idadeUsuario >= 18){
    console.log("Você pode dirigir")
} else{
    console.log("Você não pode dirigir")
} */

// 2.
/* const turnoAluno = prompt(`Qual turno você estuda?,
M = Matutino, V = Vesperino, N = Noturno`).toLowerCase()

if(turnoAluno === "m"){
    console.log("Bom Dia!")
} else if(turnoAluno === "v"){
    console.log("Boa Tarde!")
} else{
    console.log("Boa Noite!")
} */

//3. 
/* const turnoAluno = prompt(`Qual turno você estuda?,
M = Matutino, V = Vesperino, N = Noturno`).toLowerCase()

switch(turnoAluno){
    case 'm':
    console.log("Bom Dia!")
    break;
    case "v":
        console.log('Boa Tarde!')
        break;
    case "n":
        console.log('Boa Noite!')
        break;
    default:
        console.log('Turno não registrado.')
} */

//4.
/* const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
const valorIngresso = Number(prompt(`Qual o valor do ingresso?
digite o valor como 0.00`))

if(generoFilme === 'fantasia' && valorIngresso < 15.00){
console.log('Bom filme!')
} else{
    console.log('Escolha outro filme :(')
} */



//---- Desafios ----



//1.
/* const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
const valorIngresso = Number(prompt(`Qual o valor do ingresso?
digite o valor como 0.00`))
const lanchinho = prompt('Qual lanchinho você comprará?')

if(generoFilme === 'fantasia' && valorIngresso < 15.00){
console.log(`Bom filme! aproveitei o(a) ${lanchinho}`)
} else{
    console.log('Escolha outro filme :(')
}  */

//2. 
/* const nomeCompleto = prompt(`Olá, antes de seguir precisamos de algumas informações:
Qual seu nome completo?`)
const tipoDeJogo = prompt(`Por favor informe qual o tipo de jogo?
 ( IN = internacional, DO = doméstico)`).toUpperCase()
const etapaDoJogo = prompt(`Qual a etapa do jogo?
 (SF = Semi-final, DT = decisão de 3 lugar, FI = Final )`).toUpperCase()
const categoriaDoJogo = prompt(`Qual a categoria?
 (1, 2, 3 ou 4)`)
const quantidadeIngressos = Number(prompt(`E por fim qual a quantidade de ingressos?`))

function calcularIngressos(tipo, etapa, categoria) {
 let valorTotal;

    if(etapa === 'SF') {
        if(categoria == '1'){
            valorTotal = 1320;
        } else if(categoria == '2'){
            valorTotal = 880;
        }else if(categoria == '3'){
            valorTotal = 550
        } else if(categoria == '4'){
            valorTotal = 220
        } 
    }
    else if(etapa === 'DT') {
        if(categoria == '1'){
            valorTotal = 660;
        } else if(categoria == '2'){
                valorTotal = 440;
        }else if(categoria == '3'){
                valorTotal = 330
        } else if(categoria == '4'){
                valorTotal = 170
        }
    }        
    else if(etapa === 'FI') {
        if(categoria == '1'){
                    valorTotal = 1980;
        } else if(categoria == '2'){
                    valorTotal = 1320;
        } else if(categoria == '3'){
                    valorTotal = 880
        } else if(categoria == '4'){
                    valorTotal = 330
        }else{}
 
    }
    if(tipo === 'IN') {
       valorTotal = valorTotal * 4.10
    }

return valorTotal
}

const valorIngresso = calcularIngressos(tipoDeJogo, etapaDoJogo, categoriaDoJogo)

console.log(`---Dados da compra---
Nome do Cliente:   ${nomeCompleto}
Tipo do jogo:   ${tipoDeJogo}
Etapa do jogo:   ${etapaDoJogo}
Categoria:   ${categoriaDoJogo}
Quantidade de Ingressos:  ${quantidadeIngressos}
---Valores---
Valor do ingresso:  ${calcularIngressos(tipoDeJogo, etapaDoJogo, categoriaDoJogo)}
Valor total: ${valorIngresso * quantidadeIngressos}`) */