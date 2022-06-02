type Catalogo = {
    nome: string
    ano: number
    genero: GENERO
    nota?: number
}

enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror"
}

function filmes(nome: string, ano: number, genero: GENERO, nota?: number): Catalogo {

    const filmes: Catalogo = {
            nome: nome,
            ano: ano,
            genero: genero,
            nota: nota
    }

    return filmes
}

console.log(filmes("Duna", 2021, GENERO.ACAO, 74))
console.log(filmes("Duna", 2021, GENERO.ACAO))
