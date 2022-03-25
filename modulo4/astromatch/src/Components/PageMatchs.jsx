import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import atualizar from '../Assets/atualizar.png'
import match from '../Assets/match.png'
import sair from '../Assets/sair.png'

const All = styled.div`
margin: 0px;
    background-color: rgb(208, 208, 208);
    font-family: Roboto, sans-serif;
`

const ContainerGeral = styled.div`
display: flex;
    flex-direction: column;
    height: 100%;
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 6%) 0px 0px 5px;
`
const ContainerHeader = styled.div`
height: 50px;
    border-bottom: 1px solid gray;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    padding: 0px 10px;
    flex-shrink: 0;
`

const ContainerBody = styled.div`
margin: 0px 0px 10px 10px;
display: flex;
flex-direction: column;
`

const Title = styled.h1`
background: linear-gradient(to right, DarkRed , rebeccapurple, steelblue);
background-clip: text;
	-webkit-background-clip: text;
color: transparent;
padding:0;
letter-spacing:1.5px;
`

const P = styled.p`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
font-size: 2.5vh;
`

const ImgMatch = styled.img`
height: 100%;
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;
`

const InfosMatch = styled.div`
position: relative;
    height: 50px;
    padding: 5px;
    margin-top: 15px;
    margin-left: 5px;
    display: flex;
    list-style: none;
    width: 90%;

    :hover {
        cursor: pointer;
        transform: scale(1.02);
        transition: all 0.2s ease 0s;
        background-color: LightGrey;
    }
`

const ButtonExit = styled.img`
width: 4vh;
display:block;

  :hover {
    transform: scale(0.8);
    transition: all 0.2s ease 0s;
  }
`

const ButtonRestart = styled.img`
width: 4vh;

  :hover {
    @keyframes loading {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    };
    animation: loading 2s linear infinite;
  }
`

function PageMatchs( props ) {

    const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/miguel-pereira`

    const [user, setUser] = useState([])
    const [matchs, setMatchs] = useState([])

    useEffect(() => {
        getMatchs();
      }, [])
    const  getProfile = () => {

        axios
        .get(
            `${URL}/person`,
        )
        .then((res) => {
            console.log( res.data.profile );
            setUser( res.data.profile );
        })
        .catch((err) => {
            console.log(err);
        });
    };

    const getMatchs = () => {
        axios
            .get(
                `${URL}/matches`
            )
            .then((res) => {
                setMatchs(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const clearMatchs = () => {
        if(window.confirm('Deseja limpar seus Matchs?')){
            axios
            .put(
              `${URL}/clear`
            )
            .then((res) => {
              alert('Seus matchs foram limpos!');
              setUser([]);
              getMatchs([])
              getProfile();
              console.log(res)
            })
            .catch((err) => {
              console.log(err);
            })
          }
        }


    return(
        <All>
            <ContainerGeral>
                <ContainerHeader>
                    <ButtonRestart src={atualizar} onClick={clearMatchs}/>
                    <Title>AstroMatch</Title>
                    <ButtonExit src={sair} onClick={props.selectHome}/>
                </ContainerHeader>
                <ContainerBody>
                  {matchs.map((matchs => 
                  <InfosMatch>
                      <ImgMatch src={matchs.photo} alt={matchs.name} />
                      <P>{matchs.name}</P>

                  </InfosMatch>))}
                </ContainerBody>
            </ContainerGeral>
        </All>
    )
};

export default PageMatchs;