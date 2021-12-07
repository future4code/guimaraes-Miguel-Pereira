/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//  */

//     let jogador = []
//     let computador = []

//     if(confirm('Bem vindo(a) ao BlackJack' + '\n' + 'Deseja inciar uma nova partida?')){

//       let sortearCartas = true

//       while ( sortearCartas ){
//          jogador.push(comprarCarta())
//          jogador.push(comprarCarta())
//          computador.push(comprarCarta())
//          computador.push(comprarCarta())

//          if(jogador[0].valor === 11 && jogador[1].valor === 11 || 
//             computador[0].valor === 11 && computador[1].valor === 11){
//             jogador = []
//             computador = []
//       } else {
//          sortearCartas = false
//       }
//    }
// }
// if (jogador[0].texto && computador[0].texto === 'A'){
//    sortearCartas
// }

// let comprarCartas = true

// while (comprarCartas){
//    let texto = ''
//    let valor = 0

//    for(let carta of jogador){
//      texto += carta.texto + ' '
//      valor += carta.valor
//    }
//    if(valor <= 21){
//       let comprarUmaCarta = confirm(`Suas cartas são ${jogador[0].texto} ${jogador[1].texto}. A carta revelada do computador é ${computador[0].texto}
//       `+ '\n' + 'Deseja comprar mais uma carta?')
//    } else {
//       comprarUmaCarta = false
//    }

// }

