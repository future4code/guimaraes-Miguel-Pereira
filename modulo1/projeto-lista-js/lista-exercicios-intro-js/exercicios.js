// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = (prompt("Digite a altura"))
  const largura = (prompt("Digite a largura"))
  const resultado = altura * largura

  console.log(resultado) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const atual = Number(prompt("Digite o ano atual"))
const nascimento = Number(prompt("Digite seu ano de nascimento"))
const resultado = atual - nascimento

console.log(resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const resultado = peso / (altura * altura)

return resultado
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite uma cor")
  const cor3 = prompt("Digite uma cor")

  const cores = [cor1, cor2, cor3]

  console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavra = string.toUpperCase()

  return palavra

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const resultado = custo / valorIngresso

  return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const palavra1 = string1.length
  const palavra2 = string2.length

  return palavra1 == palavra2
  
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  let ultimo = array[array.length - 1]

  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let first = array[0]
  let last = array[array.length -1]

  array[0] = last
  array [array.length -1] = first

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13

function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let idade = anoAtual - anoNascimento
  let cnh = anoAtual - anoCNH
  
  let renova20Anos
}

/* let anoAtual = Number(prompt("Qual o ano atual?"))
let anoNascimento = Number(prompt("Em que ano você nasceu?"))
let anoCNH = Number(prompt("Em que ano foi emitida sua CNH?"))

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")

  if(idade === "sim"){
    idade = true
  }else{
    idade = false
  }

  let escolaridade = prompt("Você tem ensino médio completo?")
  
  if(escolaridade === "sim"){
    escolaridade = true}
  else{
    escolaridade = false
  }

  let disponibilidade = prompt("Você possui disponibilidade nos horários do curso?")

  if(disponibilidade === "sim"){
    disponibilidade = true
  }else{
    disponibilidade = false
  }
  
  if(idade && escolaridade && disponibilidade === true){
    console.log(true)
  }else{
    console.log(false)
  }
}