import React from 'react'
import styled, { ThemeConsumer } from 'styled-components'
import { createTrue, textChangeRangeIsUnchanged } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const BtnDelete = styled.button `
  cursor: pointer;
  margin: 5px;
  padding: 1px 2px;
  font-size: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
      // {
      //   id: Date.now(),
      //   texto: "Fazer exercícios",
      //   completa: false
      // },

      // {
      //   id: Date.now(),
      //   texto: "Estudar",
      //   completa: true
      // }
      ],
      inputValue: '',
      filtro: ''
    }


  componentDidUpdate(localState) {
    if (localState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }

  };

  componentDidMount() {
    const persistTasks = localStorage.getItem("tarefas");
      if (persistTasks) {
        this.setState({ tarefas: JSON.parse(persistTasks) });
      }

  };

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value})

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const stateCopy = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: stateCopy});

  }

  deletaTarefa = (e) => {
    const alert = window.confirm( 'Deseja deletar tarefa?')
    if (alert === true){
      const copiaLista = [...this.state.tarefas];
      const deletarTarefas = copiaLista.filter((index) => {
      });

      this.setState({ tarefas: deletarTarefas });
    };

  }

  limparLista = () => {
    const alert = window.confirm( 'Deseja limpar sua lista de tarefas?')
    if (alert === true){
      const copiaLista = [...this.state.tarefas];
      const deletarTarefas = copiaLista.filter((id) => {
        // return this.state.tarefas
      });

      this.setState({ tarefas: deletarTarefas });
    };
  }

  selectTarefa = (id) => {
    const newTaskList = this.state.tarefas.map((tasks) => {
      if (id === tasks.id) {
        const novaTask = {
          ...tasks,
          completa: !tasks.completa,
        };
        return novaTask;
      } else {
        return tasks;
      }
    });
    this.setState({ tarefas: newTaskList });

  }

  onChangeFilter = (e) => {
    this.setState({ filtro: e.target.value});

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input inputValue={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <BtnDelete onClick={this.deletaTarefa}> X </BtnDelete>
              </Tarefa>
            )
          })}
        </TarefaList>
        <button onClick={this.limparLista}>Limpar lista</button>
      </div>
    )
  }
}

export default App
