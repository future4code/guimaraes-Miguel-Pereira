import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

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
const H4 = styled.h4`
padding: 1rem;
background: black;
display: flex;
flex-direction: column;
font-weight: bold;
font-size: 4vh;
margin: 0 auto;
background: -webkit-linear-gradient(#4B0082, white);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
letter-spacing: 1px;
`
const P = styled.p`
padding: 0.2rem;
background: black;
display: flex;
flex-direction: column;
font-weight: bold;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`
const Audio = styled.audio`
margin: 5px;

`
const ContainerPlayer = styled.div`
// font-size: 3vh;
font-weigth: bold;
border-radius: 5px;
padding: 2px;
margin: 2px;
cursor: default;
background: #F5F5F5;
box-shadow: 
                0 0 5px white,
  
                0 0 5px #4B0082,
  
                0 0 5px white,
  
                0 0 5px #4B0082;


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
  
                0 0 10px white,
  
                0 0 10px white,
  
                0 0 10px white;
  
  }
`

export const headers = {
  headers: {
    Authorization: "miguel-pereira-guimaraes",
  },
};

export default class Playlists extends React.Component {

  state = {
    show: [],
    name: "",
    artist: "",
    music: ""
  }

  componentDidMount() {
    this.getTracks();
  }
  componentDidUpdate() {
    this.getTracks()
  }

  getTracks = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        headers
      )
      .then((res) => {
        this.setState({ show: res.data.result.tracks });
      })
      .catch((err) => {});
  };

  nameMusic = (e) => {
    this.setState({ name: e.target.value });
  };
  artistMusic = (e) => {
    this.setState({ artist: e.target.value });
  };
  urlMusic = (e) => {
    this.setState({ music: e.target.value });
  };

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.music,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
       this.setState({ name: "" });
       this.setState({ artist: "" });
       this.setState({ music: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  removeTrackFromPlaylist = (trackId) => {

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selectPlaylist.id}/tracks/${trackId}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };


  render() {
    const trackRender = this.state.show.map((track) => {
      return (
        <div>
          <ContainerPlayer key={track.id}>
            <div>
            <P>Artista/Banda: {track.artist}</P>
            <P>Musica: {track.name}</P>
            </div>
            <Audio controls>
            <source src={track.url} type={"audio/mp4"}/>
            </Audio>
            <br/>
            <Buttons onClick={() => {this.removeTrackFromPlaylist(track.id)}}>
            Excluir Música
          </Buttons>
          </ContainerPlayer>
        </div>
      );
    });

    return (
      <ContainerGeral>
        <H2>Suas Playlists</H2>
        <H4>{this.props.selectPlaylist.name}</H4>
        <Input
          type="text"
          placeholder="música"
          value={this.state.name}
          onChange={this.nameMusic}
        />
        <br />
        <Input
          type="text"
          placeholder="artista/banda"
          value={this.state.artist}
          onChange={this.artistMusic}
        />
        <br />

        <Input
          type="text"
          placeholder="link"
          value={this.state.music}
          onChange={this.urlMusic}
        />
        <br />

        <Buttons onClick={this.addTrackToPlaylist}>
          Adicionar
        </Buttons>
        <br />
        <br />

        {trackRender}
        <br />
        <br />

        <Buttons onClick={this.props.renderPage}>
          Voltar
        </Buttons>
        <br />
        <br />

      </ContainerGeral>
    )
  }
}