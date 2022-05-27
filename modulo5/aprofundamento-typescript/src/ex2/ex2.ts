const amostraDeIdades: Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

type Amostra = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => Estatistica
}

type Estatistica = {
    maior: number,
    menor: number,
    media: number,
}
function obterEstatisticas(numeros: number[]): Estatistica{

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// console.log(obterEstatisticas([2, 4, 8, 16]))
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))