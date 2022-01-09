```Javascript
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let ocorrencia = 0;
  
  for (i = 0; i < arrayDeNumeros.length; i++)
  {
    if (arrayDeNumeros[i] === numeroEscolhido)
      ocorrencia++;
  }
  
  if (ocorrencia !== 0)
    {
    return `O número ${numeroEscolhido} aparece ${ocorrencia}x`
    }
  
  else
    {
    return "Número não encontrado";
    }
}
```