//---- Exercícios de interpretação de código ----



//1. Será impresso: 
//{nome: 'Amanda Rangel', apelido: 'Mandi'} 0 (3) [{…}, {…}, {…}]
//{nome: 'Laís Petra', apelido: 'Laura'} 1 (3) [{…}, {…}, {…}]
//{nome: 'Letícia Chijo', apelido: 'Chijo'} 2 (3) [{…}, {…}, {…}]

//2. será impresso:
// nome: 'Amanda Rangel'
// nome: 'Laís Petra'
// nome: 'Letícia Chijo'

//3. Será impresso:
// apelido: 'Mandi'
// apelido: 'Laura'



// ---- Exercícios de escrita de código ----



//1.
// const pets = [
//     {nome: "Lupin", raca: "Salsicha"},
//     {nome: "Polly", raca: "Lasha Apso"},
//     {nome: "Madame", raca: "Poodle"},
//     {nome: "Quentinho", raca: "Salsicha"},
//     {nome: "Fluffy", raca: "Poodle"},
//     {nome: "Caramelo", raca: "Vira-lata"}

// ]

// //a.
// const arrayDeNomes = pets.map((item) => {
// return item.nome
// })
// console.log(arrayDeNomes)

// //b.
// const arrayDeSalsichas = pets.filter((nome) =>{
//     return nome.raca.toLowerCase() === 'salsicha'
// })

// console.log(arrayDeSalsichas)

// //c.
// const petsPoodle = pets.filter((nome) =>{
//     return nome.raca.toLowerCase() === 'poodle'
// })

// const mensagemDesconto = petsPoodle.map((pet) => {
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}`)
// })

// //2.
// const produtos = [
//    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
// ]

// //a.
// const arrayDeNomes = produtos.map((item) =>{
//     return item.nome
// })

// console.log(arrayDeNomes)

// //b.
// const NomeComPreco = produtos.map((item, indice, array) => {
//       const descontoPreco = item.preco * 0.95
//       const itemMaisPreco = [item.nome, descontoPreco.toFixed(2)]

// return itemMaisPreco
// })

// console.log(NomeComPreco)

// //c.
// const filtraCategoria = produtos.filter((item, indice, array) =>{
//     return item.categoria.toLowerCase() === 'bebidas'
// })
// console.log(filtraCategoria)

// //d.
// const arrayYpe = produtos.filter((item, indice, array) =>{
//     return item.nome.includes('Ypê')
// })

// console.log(arrayYpe)

// //e.
// const arrayComYpe = produtos.filter((item, indice, array) =>{
//     return item.nome.includes('Ypê')
// })

// const fraseDeCompra = arrayComYpe.map((item, indice, array) =>{
//     return `Compre ${item.nome} por R$ ${item.preco}.`
// })

// console.log(fraseDeCompra)



// ---- Desafios ----



// //1.
// const pokemons =[
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" }
// ]

// //a.
// const listaDePokemons = pokemons.map((item, indice, array) =>{
//     return item.nome
// })

// const nomesEmOA = listaDePokemons.sort()

// console.log(nomesEmOA)

// //b.
// const tiposDePokemons = pokemons.map((item, indice, array) => {
//     return item.tipo
// })
// console.log(tiposDePokemons)

// const pokemonsSemRepetir = tiposDePokemons.filter((item, indice) => {
//     return indice === tiposDePokemons.indexOf(item)
// })
//     console.log(pokemonsSemRepetir)

//     const pokemonsEmOrdem = pokemonsSemRepetir.sort()

//     console.log(pokemonsEmOrdem)