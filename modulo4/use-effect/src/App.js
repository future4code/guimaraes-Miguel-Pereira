import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import PokeCard from './components/pokeCard/PokeCard';
import styled from 'styled-components';

//Estilização do código

const StyledBody = styled.body`
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`



//Códigos 

function App(props) {


  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  return (
    <div>
      <StyledBody>
        <h1> Pokedéx </h1>
        <select onChange={changePokeName}>
            <option value={""}>Nenhum</option>
            {pokeList.map((pokemon) => {
              return (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              );
            })}
          </select>
          {pokeName && <PokeCard pokeName = {pokeName} />}
      </StyledBody>
      
    </div>
  );
}

export default App;
