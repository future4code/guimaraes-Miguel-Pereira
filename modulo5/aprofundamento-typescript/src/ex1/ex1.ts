// A)
// const myString: string = "Miguel"
// const myString2: string = 23
// Quando tentamos adicionar algo diferente de um string
// o VsCode nos indica um erro de Type

// B)
const myNumber: number | string = 23
const myNumber2: number | string = "23"

// C)
type personDetails ={
    name: string,
    age: number,
    favoriteColor: string
}

enum Colors {
    RED = "Vermelho",
    ORANGE = "Laranja",
    YELLOW = "Amarelo",
    GREEN = "Verde",
    BLUE = "Azul",
    VIOLET = "Violeta",
}
const person1: personDetails = {
    name: "Miguel",
    age: 23,
    favoriteColor: Colors.BLUE
}
const person2: personDetails = {
    name: "Natalia",
    age: 25,
    favoriteColor: Colors.VIOLET
}
const person3: personDetails = {
    name: "Lucas",
    age: 20,
    favoriteColor: Colors.RED
}