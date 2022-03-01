import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {

      return(
      <MainContainer>
        <h1>Insta F4</h1>
        <Post
          nomeUsuario= {'Paulinha'}
          fotoUsuario= {'https://picsum.photos/50/50'}
          fotoPost= {'https://picsum.photos/200/150'}
        />
        <Post
         nomeUsuario={'Pedro'}
         fotoUsuario={'https://picsum.photos/50/50'}
         fotoPost={'https://picsum.photos/200/150'}
         />
         <Post 
         nomeUsuario={'Luana'}
         fotoUsuario={'https://picsum.photos/50/50'}
         fotoPost={'https://picsum.photos/200/150'}
         />
      </MainContainer>
    );
  }
}

export default App;
