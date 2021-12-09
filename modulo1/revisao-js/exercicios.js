// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  
    return array.sort(function(a,b){return a-b})
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novaArray = []
    for(let item of array) {
        if(item % 2 === 0) {
            novaArray.push(item)
        }
    }
    return novaArray

}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novaArray = []
    for(let item of array) {
        if(item % 2 === 0 ) {
            novaArray.push(Math.pow(item, 2))
        }
    }
    return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
 return array.reduce(function(a,b){
     return Math.max(a,b)
 })
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = "";
let menorNumero ="";
let maiorDivisivelPorMenor = "";
let diferenca = "";

if (num1 > num2){
    maiorNumero = num1;
    menorNumero = num2;
} else {
    maiorNumero = num2;
    menorNumero = num1;
}
if (maiorNumero % menorNumero === 0){
    maiorDivisivelPorMenor = true
} else {
    maiorDivisivelPorMenor = false
}

diferenca = maiorNumero - menorNumero

return {'maiorNumero': maiorNumero,
'maiorDivisivelPorMenor': maiorDivisivelPorMenor,
'diferenca': diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   for( let i = 0; numerosPares.length < n; i++){
       if (i % 2 === 0 ){
           numerosPares.push(i)
       }
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    return 'Escaleno'
} else if(ladoA === ladoB && ladoB=== ladoC && ladoC === ladoA){
    return 'Equilátero'
} {
    return 'Isósceles'
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
 
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {...pessoa, nome: 'ANÔNIMO'}

   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}