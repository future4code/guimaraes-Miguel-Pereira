/*  || Exercícios de interpretação de código ||



1- const bool1 = true
const bool2 = false
const bool3 = !bool2 (true)

a. false
b. false
c. false
d. boolean 

2- No console sera impresso a concatenação dos dois
números, pois o prompt sempre lê como String.

3- A solução para o problema é usar o comando Number()
antes do prompt para transformar a String em Number.

let primeiroNumero = Number(prompt("Digite um numero!")
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)



 || Exercícios de escrita de código || */



//1-

/* const nome = Number(prompt("Qual sua idade?"))
const nome2 = Number(prompt("Qual a idade do seu melhor amigo?"))

diferenca = nome > nome

console.log("Sua idade é maior que a do seu melhor amigo? /", diferenca )
console.log(nome - nome2) */

//2-

/* numeroPar = Number(prompt("Digite um número par"))
console.log("O resto desse número é", numeroPar%2)*/

/* C- Independente do número par que eu coloque o resultado
da divisão é sempre 0  

   D- Ao digitar um número impar o resto da divisão
   passa a ser 1 */

   //3- 

/*    idade = Number(prompt("Qual a sua idade"))
   meses = 12
   dias = 365
   horas = 24

   console.log("Você tem em media",idade * meses, "mêses de vida.")
   console.log("Você tem em media", idade * dias, "dias de vida.")
   console.log("Você tem em media", (dias * horas) * meses, "horas de vida.") */

   //4- 
/* numero = Number(prompt("Digite um número"))
numero2 = Number(prompt("Digite outro número"))

console.log("O primeiro número é maior que o segundo?", numero > numero2)
console.log("O primeiro número é igual o segundo?", numero === numero2)
console.log("O primeiro número é divisível pelo segundo?", numero % numero2 ===0)
console.log("O segundo número é divisível pelo primeiro?", numero2 % numero ===0)
 */



//---- Desafios ----



//1. 
/* const fahrenheit = (celcius) => {

   const grausFahrenheit = (celcius * (9/5)) + 32

   return grausFahrenheit
}

const kelvin = (fahrenheit) => {

   const grausKelvin = (((fahrenheit - 32) * (5/9)) + 273.15)

   return grausKelvin
}

// a. 
const cParaF = fahrenheit(77)
const fParaK = kelvin(cParaF)

console.log(`77°C = ${fParaK}°K`)

// b.
console.log(`80°C = ${fahrenheit(80)}°F`)

// c.
console.log(`30°C = ${fahrenheit(30)}°F`)
console.log(`30°C = ${fParaK}°K`) */

//2.

/* const quilowattHora = 0.05

//a.
valorQuilowatt = quilowattHora * 280

console.log(`O valor gasto pela residencia foi: R$ ${valorQuilowatt},00`)

//b.
const valorDoDesconto = (15 * valorQuilowatt) / 100

const valorComDesconto = valorQuilowatt -valorDoDesconto

console.log(`O valor a ser pago com 15% de desconto é: ${valorComDesconto}`) */

//3.
/* 
const kgLb = 0.03
const kgOz = 0.45

const mMi = 1.60
const mFt = 0.30

const lGal = 3.80
const lXic = 0.24

// a.
const calcularQuiloLibra = (libra) =>{

   const converterKgLb = kgLb * libra

   return converterKgLb
} 
console.log(`20lb equivalem a ${calcularQuiloLibra(20)}kg`)

//b.
const calcularQuiloOnca = (onca) =>{

   const converterKgOz = kgOz * onca

   return converterKgOz
} 
console.log(`10.5oz equivalem a ${calcularQuiloOnca(10.5)}kg`)

//c.
const calcularMetroMilha = (milha) =>{

   const convertermMi = mMi * milha

   return convertermMi
} 
console.log(`100mi equivalem a ${calcularMetroMilha(100)}m`)

//d.
const calcularMetroPes = (pes) =>{

   const convertermFt = mFt * pes

   return convertermFt
} 
console.log(`50ft equivalem a ${calcularMetroPes(50)}m`)

//e.
const calcularLitroGalao = (galao) =>{

   const converterLGal = lGal * galao

   return converterLGal
} 
console.log(`103.56gal equivalem a ${calcularLitroGalao(103.56)} l`)

//f.
const calcularLitroXicara = (xicara) =>{

   const converterLXic = lXic * xicara

   return converterLXic
} 
console.log(`450xic equivalem a ${calcularLitroXicara(450)} l`)

//g.
const valorXicara = Number(prompt("Xícaras:"))
const valorMilhas = Number(prompt("Milhas:"))



const calcularLitroDaXicara = (xicara) =>{

   const converterLXic = lXic * xicara

   return converterLXic
} 
console.log(`${valorXicara}xic  =  ${calcularLitroDaXicara(valorXicara)} l `)


const calcularMetroDaMilha = (milha) =>{

   const convertermMi = mMi * milha

   return convertermMi
} 
console.log(`${valorMilhas}mi  =  ${calcularMetroMilha(100)}m`) */