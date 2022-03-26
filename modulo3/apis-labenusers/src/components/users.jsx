import React from "react";
import axios from "axios";

class User extends React.Component {
    state = {
        usuarios: []
    }
    deletUser = (usuarioId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${usuarioId}`, {
            headers: {
                Authorization: "miguel-pereira-guimaraes"
            }
        })
            .then(response => {
                console.log(response.data)
                alert ("Usuário deletado com sucesso!")
                this.getUserByld()
            })
            .catch(error => {
                console.log(error.message)
                alert ("Erro ao deletar usuário")
            })
    }

    componentDidMount() {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", {
            headers: {
                Authorization: "miguel-pereira-guimaraes"
            }
        })
            .then(response => {
                this.setState({
                    usuarios: response.data
                })
            })
            .catch(error => {
                alert ("Erro ao buscar usuários")
            })
    }
mostrarUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "miguel-pereira-guimaraes"
            }
        })
        const usuarios = this.state.usuarios.map(usuario => {
            return (
                <li key={usuario.id}>
                    {usuario.name}
                    {usuario.email}
                    <button onClick={() => this.deletUser(usuario.id)}>Deletar</button>
                </li>
            )
        })
        return usuarios
    }
    render() {
        return (
            <div className="App">
                {/* <h1>Cadastro de Usuários</h1> */}
                <ul>
                    {this.mostrarUsers()}
                </ul>
            </div>
        );
    }
}
export default User;