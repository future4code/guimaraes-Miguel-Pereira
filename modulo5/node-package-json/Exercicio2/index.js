//Exercício 2.
const calculo = process.argv[2]
const y = Number(process.argv[3])
const z = Number(process.argv[4])

    switch(calculo){
        case "soma":
            console.log(`Resultado: ${y + z}` )
            break;
        case "subtraçao":
            console.log(`Resultado: ${y - z}` )
            break;
        case "multiplicaçao":
            console.log(`Resultado: ${y * z}` )
            break;
        default:
            "valor inesperado"
    }