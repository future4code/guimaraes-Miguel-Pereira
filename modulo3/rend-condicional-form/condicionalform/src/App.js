import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './coponents/Etapa1'
import Etapa2 from './coponents/Etapa2';
import Etapa3 from './coponents/Etapa3';
import EtapaFinal from './coponents/EtapaFinal';

const Body = styled.div `
  text-align: center;
  padding: 20px;
`

const StyledBtn = styled.button `
  text-align: center;
  padding: 3px;
  margin: 20px;
  box-shadow: 2px, 2px, 2px black;

`

class App extends React.Component {
  
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />;

      case 2: 
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <EtapaFinal />;
  }
}

proximaEtapa = () => {
  this.setState({ etapa: this.state.etapa + 1});

}

    render() {

  return(
    <Body>
			{this.renderizaEtapa()}
	    <StyledBtn onClick={this.proximaEtapa}>Próxima Etapa</StyledBtn>
	  </Body>
  );
 }
}

export default App;
