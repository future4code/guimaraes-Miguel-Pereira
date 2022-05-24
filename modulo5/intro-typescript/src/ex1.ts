function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(11, 2, 7)) //retorna "Escaleno"
  console.log(checaTriangulo(11, 11, 11)) //retorna "Equilátero"
  console.log(checaTriangulo(11, 11, 8)) //retorna "Isóceles"