function retornaContasComSaldoAtualizado(contas: number[]): number[] {

    let somaCompras: number = undefined;
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma: number, i: number) => {
            soma += i
            return soma

        });
        conta.saldoTotal -= somaCompras


        conta.compras = []

        return contas
    }
} 