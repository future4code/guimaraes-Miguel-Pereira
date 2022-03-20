import React, {useState, useEffect} from "react";
import axios from "axios";
import Playlists from "./Playlists";
import styled from "styled-components";

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "miguel-pereira-guimaraes",
  },
};

function CreatePlaylist(props) {

  const [name, setName] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState(false);
  const [selectPlaylist, setSelectPlaylist] = useState("");

  useEffect({
    getPlaylist
  },[])


  function renderTracks(showPlaylist) {
    setTracks( true );
    setSelectPlaylist( showPlaylist );
  };
  // console.log(renderTracks)

  function renderPage() {
    setTracks( false );
  };

  function createPlaylist() {
    const body = {
      name: name,
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("playlist criada!");
        setName( "" );
      })
      .catch((err) => {
        alert("Inválido, tente outro nome");
      });
  };
//  console.log(createPlaylist)
  function getNamePlaylist(e) {
    setName( e.target.value );
  };

  function getPlaylist () {
    axios
      .get(URL, headers)
      .then((res) => {
        setPlaylists( res.data.result.list );
      })
      .catch((err) => {
        console.log("erro!");
      });
  };
  // console.log(getPlaylist)
  function deletePlaylist(playlistId) {

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };
  // console.log(deletePlaylist)
    if (tracks) {
      return (
        <Playlists
          renderPage={renderPage}
          selectPlaylist={selectPlaylist}
        />
      );
    }  

    const playlistsRenderizadas = playlists.map((pl) => {
      return (
        <div>
          <div>
          <div
            key={pl.id}
            onClick={renderTracks(pl)}>
          {pl.name}
          <br />
          </div>
          <button onClick={deletePlaylist(pl.id)}>deletar
          </button>
          <br />
          </div>      
        </div>
      );
    });

    return (
      <div>
        <button onClick={props.goToLogin}>Retornar</button>
        <h2>Deep Ocean</h2>
        <input
          type="text"
          placeholder="Nome da Playlist"
          value={name}
          onChange={getNamePlaylist}
        />
        <br />
        <button onClick={createPlaylist}>criar</button>
        <br />
        <br />
        <h1>Minhas Playlists</h1>
        {playlistsRenderizadas}
        <br />
      </div>
    );
}

export default CreatePlaylist;