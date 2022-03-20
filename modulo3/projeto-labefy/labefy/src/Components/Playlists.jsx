import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

export const headers = {
  headers: {
    Authorization: "miguel-pereira-guimaraes",
  },
};

function Playlists(props) {

  const [show, setShow] = useState([])
  const [name, setName] = useState("")
  const [artist, setArtist] = useState("")
  const [music, setMusic] = useState("")

   useEffect({
    getTracks
  },[])

  function nameMusic(e) {
    setName( e.target.value );
  };
  function artistMusic(e) {
    setArtist( e.target.value );
  };
  function urlMusic(e) {
    setMusic( e.target.value );
  };

  function getTracks() {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.selectPlaylist.id}/tracks`,
        headers
      )
      .then((res) => {
        setShow( res.data.result.tracks );
      })
      .catch((err) => {});
  };

  function addTrackToPlaylist() {
    const body = {
      name: name,
      artist: artist,
      url: music,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.selectPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
       setName( "" );
       setArtist( "" );
       setMusic( "" );
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  function removeTrackFromPlaylist(trackId) {

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${props.selectPlaylist.id}/tracks/${trackId}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

    const trackRender = show.map((track) => {
      return (
        <div>
          <div key={track.id}>
            <div><span>{track.artist}</span> - {track.name}</div>
            <audio controls>
            <source src={track.url} type={"audio/mp3"}/>
            </audio>
            <button onClick={removeTrackFromPlaylist(track.id)}>
            Excluir Música
          </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/* <h1>Suas Playlists</h1> */}
        <h3>{props.selectPlaylist.name}</h3>
        <input
          type="text"
          placeholder="música"
          value={name}
          onChange={nameMusic}
        />
        <br />
        <input
          type="text"
          placeholder="artista/banda"
          value={artist}
          onChange={artistMusic}
        />
        <br />

        <input
          type="text"
          placeholder="link"
          value={music}
          onChange={urlMusic}
        />
        <br />

        <button onClick={addTrackToPlaylist}>Adicionar</button>
        <br />
        <br />

        {trackRender}
        <br />
        <br />

        <button onClick={props.renderPage}>Voltar</button>
        <br />
        <br />

      </div>
    );
}

export default Playlists;