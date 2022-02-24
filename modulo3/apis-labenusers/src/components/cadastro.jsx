import axios from 'axios';
import React, { Component } from 'react';
import PaginaUser from './paginaUsers';

const requestCadastro = axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
    headers: {
        Authorization: 'anderson-franciscato-guimaraes' }
        })

class Cadastro extends Component {
 state = {
    usuarios: []
  }

  componentDidMount() {
    requestCadastro.then(response => {
      this.setState({
        usuarios: response.data
      })
      .catch(error => {
        console.log (error.message)
    })
  })
  }

  createCadastro() {
    const body = {
      name: this.state.nameImput,
      email: this.state.emailImput,
  }
  axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
          Authorization: 'anderson-franciscato-guimaraes'
      }
  })
  .then(response => {
      console.log(response.data)
      alert('Usuário cadastrado com sucesso')
      this.setState({ nameImput: '', emailImput: '' })
      this.getUserByld()
  })
  .catch(error => {
      console.log(error.message)
  })
  }
onChangeinputUsuario(event) {
    this.setState({ nameImput: event.target.value })
  }
  onChangeinputEmail(event) {
    this.setState({ emailImput: event.target.value })
  }
  nextPage() {
    this.props.history.push(<PaginaUser />)
  }
  render() {
    const cadastroCOmponent = this.state.usuarios.map(usuario => {
      return <li key ={usuario.id}> {usuario.name}
      {usuario.email}
      </li>
    })

    return (
      <div className="App">
          <h1>Cadastro de Usuários</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nameImput}
            onChange={(event) => this.onChangeinputUsuario(event)}
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.emailImput}
            onChange={(event) => this.onChangeinputEmail(event)}
          />
          <button onClick={() => this.createCadastro()}>Cadastrar</button>
        </div>
        <div>
          <button onClick={() => this.nextPage()}>Próxima página</button>
        </div>
      </div>
    );
  }
}
export default Cadastro;