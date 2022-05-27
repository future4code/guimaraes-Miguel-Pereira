type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//Usar o comando "tsc && node ./build/ex4/ex4.ts" para traspilar o arquivo
//.ts para .js

//Não, pois o arquivo .ts fica dentro da pasta src e quando transpilado ele
//cria uma nova pasta build com o arquivo .js

//