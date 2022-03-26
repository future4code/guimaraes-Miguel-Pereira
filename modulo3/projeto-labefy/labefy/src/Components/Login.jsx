import React from "react";
import styled from "styled-components";

const ContainerGeral = styled.div`
margin 15px;
display: flex;
flex-direction: column;
align-items: center;
`

const ContainerTextos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const StyledH1 = styled.h1`
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
letter-spacing: 5px;
`

const StyledH4 = styled.h4`
padding: 1rem;
background: black;
display: flex;
flex-direction: column;
font-weight: bold;
font-size: 3vh;
margin: 0 auto;
background: -webkit-linear-gradient(#4B0082, white);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Button = styled.button`
background: -webkit-linear-gradient(#4B0082, white);
letter-spacing: 0.5px;

:hover {

  overflow: hidden;

  transition: 0.2s;

  margin-top: 2px;

  letter-spacing: 2px;

  background: -webkit-linear-gradient(#4B0082, white);
  
    color: white;
  
    border-radius: 5px;
  
    box-shadow: 0 0 10px white,
  
                0 0 10px white,
  
                0 0 10px white,
  
                0 0 10px white;
  
  }
`

const StyledP = styled.p`
margin: 0 auto;
padding: 0.5rem;
background: black;
display: flex;
flex-direction: column;
font-weight: bold;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

function Login(props) {
    return (
      <ContainerGeral>
        <ContainerTextos>
          <StyledH1><i>Labefy</i></StyledH1>
          <br></br>
          <StyledH4>"Música Para Todos Os Estilos"</StyledH4>
          <br></br>
          <br></br>
        </ContainerTextos>
        <Button 
        onClick={props.goToPlaylists}>
          <StyledP>
            Suas <br/> <br/>Playlists
          </StyledP>
        </Button>
      </ContainerGeral>
    );
  }

  export default Login;