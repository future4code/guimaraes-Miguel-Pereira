function typeParam(param: any): string {
    let type = typeof param;
    return (`O tipo do parâmetro (${param}) é: ${type}`);
  }

  console.log(typeParam("Teste"))
  console.log(typeParam(23))

