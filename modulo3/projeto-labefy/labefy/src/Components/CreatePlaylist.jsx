import React from "react";
import axios from "axios";
import Playlists from "./Playlists";
import styled from "styled-components";

//Estilizações

const ContainerGeral = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
max-width: 100%;
min-height: 100vh;
margin: 20px;
`

const H2 = styled.h2`
padding: 1rem;
background: black;
display: flex;
flex-direction: column;
font-weight: bold;
font-size: 6vh;
margin: 0 auto;
background: -webkit-linear-gradient(#4B0082, white);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 1px;
`
const ContainerPlaylists = styled.div`
font-size: 3vh;
font-weigth: bold;
background: -webkit-linear-gradient(whitesmoke, #4B0082);
border-radius: 10px;
padding: 5px;
margin: 5px;
cursor: default;
box-shadow: 
                0 0 5px white,
  
                0 0 5px #4B0082,
  
                0 0 5px #4B0082,
  
                0 0 5px white;


`

const Input = styled.input`
display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: 2s;
`

const Buttons = styled.button`
background: -webkit-linear-gradient(#4B0082, white);
margin: 2px;

:hover {

  overflow: hidden;

  transition: 0.2s;

  letter-spacing: 0.5px;

  background: -webkit-linear-gradient(#4B0082, white);
  
    color: white;
  
    border-radius: 5px;
  
    box-shadow: 0 0 10px white,
  
                0 0 10px #4B0082,
  
                0 0 10px white,
  
                0 0 10px #4B0082;
  
  }
`



//Código

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "miguel-pereira-guimaraes",
  },
};

export default class CreatePlayList extends React.Component {
  state = {
    nome: "",
    playlists: [],
    tracks: false,
    selectPlaylist: "",
  };

  rendertracks = (mostraPlaylist) => {
    this.setState({ tracks: true, selectPlaylist: mostraPlaylist });
  };

  renderPage = () => {
    this.setState({ tracks: false });
  };

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nome,
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Sua playlist foi criada!");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert("Houve um erro, tente outro nome");
      });
  };

  getNomePlaylist = (e) => {
    this.setState({ nome: e.target.value });
  };

  getPlaylist = () => {
    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log("erro!");
      });
  };

  deletePlaylist = (idPlaylist) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.tracks) {
      return (
        <Playlists
          renderPage={this.renderPage}
          selectPlaylist={this.state.selectPlaylist}
        />
      );
    }  

    const playlistsRenderizadas = this.state.playlists.map((playlist) => {
      return (
        <div>
          <divPlaylists>
          <divPlaylists
            key={playlist.id}
            onClick={() => this.rendertracks(playlist)}>
          {playlist.name}
          <br />
          </divPlaylists>
          <Buttons 
          onClick={() => this.deletePlaylist(playlist.id)}>deletar
          </Buttons>
          <br />
          </divPlaylists>      
        </div>
      );
    });

    return (
      <ContainerGeral>
        <Buttons 
        onClick={this.props.goToLogin}>Retornar
        </Buttons>
        <H2>Criar Playlist</H2>
        <Input
          type="text"
          placeholder="Nome da Playlist"
          value={this.state.nome}
          onChange={this.getNomePlaylist}
        />
        <br />
        <Buttons
         onClick={this.createPlaylist}>criar
         </Buttons>
        <br />
        <br />
        <H2>Minhas Playlists</H2>
        <ContainerPlaylists>
          {playlistsRenderizadas}
        </ContainerPlaylists>
        <br />
      </ContainerGeral>
    );
  }
}