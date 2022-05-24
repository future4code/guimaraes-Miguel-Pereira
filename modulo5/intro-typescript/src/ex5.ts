function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): string {
    let idade = anoAtual - anoNascimento
    let tempoCarteira = anoAtual - anoEmissao
   
     if(idade <= 20 ) {
         return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
      } else if(idade > 20 || idade < 50) {
         return tempoCarteira >= 10  ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
      } else if(idade >= 50) {
         return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
       } else {
           return "error"
       }
   }

   //Checa para idades menores de 20 anos
   console.log(checaRenovacaoRG(2022, 2003, 2015))
   console.log(checaRenovacaoRG(2022, 2003, 2018))
   //Checa para idades entre 20 e 50 anos
   console.log(checaRenovacaoRG(2022, 1996, 2018))
   console.log(checaRenovacaoRG(2022, 1998, 2000))
   //Checa para idades maiores que 50 anos
   console.log(checaRenovacaoRG(2022, 1963, 1987))
   console.log(checaRenovacaoRG(2022, 1964, 2008))