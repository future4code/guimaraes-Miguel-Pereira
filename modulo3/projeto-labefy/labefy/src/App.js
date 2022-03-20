import React, {useState} from "react";
import CreatePlaylist from "./Components/CreatePlaylist";
import Login from "./Components/Login";
import Playlists from "./Components/Playlists";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
max-width: 100%;
min-height: 100vh;
background: #1C1C1C;
` 


function App() {
  const[screen, setScreen] = useState("login")

  function switchScreen  ()  {
    switch (screen) {
      case "login":
        return <Login goToPlaylists={switchPlaylists} />;
      case "playlists":
        return <CreatePlaylist goToLogin={switchLogin} />;
      default:
        return <p>erro</p>;
    }
  };

  function switchPlaylists() {
   setScreen( "playlists");
  };

  function switchLogin() {
    setScreen( "login" );
  };

 
    return(
    <>
    <Container>{switchScreen()}</Container>
    {/* <CreatePlaylist /> */}
    </>
    )
}

 export default App;