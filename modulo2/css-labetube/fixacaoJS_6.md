 ```Javascript
 const tarefasFiltradas = tarefas.filter((tarefa) => {
    return tarefa.status === "done"

 })
 
 const tarefasConcluidas = tarefasFiltradas.map((tarefa)=>{
    return tarefa.titulo
 })

 return tarefasConcluidas

}
```