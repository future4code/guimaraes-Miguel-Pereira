import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
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
padding: 20px 20px 0px;
display: flex;
flex-direction: column;
flex: 1 1 0%;
-webkit-box-pack: end;
justify-content: flex-end;
`
const ContainerFooter = styled.div`
display: flex;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    padding: 10px 0px;
`

const ContainerUser = styled.div`
box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.5s ease 0s;
    height: 430px;
    animation: 0.5s ease 0s 1 normal forwards running none;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    
`
const ContainerImgUser = styled.div`
box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
position: relative;
border-radius: 5px;
overflow: hidden;
transition: all 0.5s ease 0s;
height: 100%;
animation: 0.5s ease 0s 1 normal forwards running none;
display: flex;
-webkit-box-align: center;
align-items: center;
`

const ContainerInfoUser = styled.div`
position: absolute;
bottom: 0px;
width: 100%;
background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
color: white;
display: flex;
flex-direction: column;
z-index: 2;
`

const ImgUser = styled.img`
width: 100%;
    display: block;
    z-index: 1;
`

const Title = styled.h1`
background: linear-gradient(to right, DarkRed , rebeccapurple, steelblue);
background-clip: text;
	-webkit-background-clip: text;
color: transparent;
padding:0;
letter-spacing:1.5px;
`

const Infos = styled.p`
margin: 5px;
padding: 10px;
`

const ButtonMatch = styled.img`
width: 4vh;

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

const ButtonLike = styled.button`
border-radius: 50%;
border: 1px solid steelblue;
font-size: 6vh;
background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    transform: scale(1.2);
    transition: all 02.s ease 0; 
    border: 1px solid DarkRed;
    background-image: linear-gradient(to bottom, rebeccapurple, DarkRed, Crimson);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  :active {
    transform: scale(1);
    transition: all 0.1s;

  }
`

const ButtonDislike = styled.button`
padding: 1px 7px;
border-radius: 50%;
border: 1px solid steelblue;
font-size: 6vh;
background-image: linear-gradient(to bottom, rebeccapurple, steelblue, turquoise);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  :hover {
    transform: scale(1.2);
    transition: all 0.2s ease 0; 
    border: 1px solid DarkRed;
    background-image: linear-gradient(to bottom, rebeccapurple, DarkRed, Crimson);
background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }

  :active {
    transform: scale(1);
    transition: all 0.1s;

  }
`

function HomePage( props ) {

    const headers = {
        headers: {
          Authorization: "miguel-pereira-guimaraes",
        },
      };

    const URL = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/miguel-pereira`

      const [user, setUser] = useState([]);

      useEffect(() => {
        getProfile();
      }, [])

    const  getProfile = () => {

            axios
              .get(
                `${URL}/person`,
              )
              .then((res) => {
                // console.log( res.data.profile );
                setUser( res.data.profile );
              })
              .catch((err) => {
                  console.log(err);
              });
          };

    const clearMatchs = () => {
      if(window.confirm('Deseja limpar seus Matchs?')){
          axios
          .put(
            `${URL}/clear`
          )
          .then((res) => {
            alert('Seus matchs foram limpos!');
            setUser([]);
            getProfile();
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          })
        }
      }

    const buttonLike = () => {

      const body = {
        id: user.id,
        choice: true,
      }
            axios
             .post(
                 `${URL}/choose-person`, body
             )
             .then((res) => {
               getProfile();
                //  console.log(res);

             })
             .catch((err) => {
                 console.log(err);
             })
        };

        const buttonDislike = () => {

          const body = {
            id: user.id,
            choice: false,
          }
                axios
                 .post(
                     `${URL}/choose-person`,
                      body
                 )
                 .then((res) => {
                   getProfile();
                  //  console.log(res);
    
                 })
                 .catch((err) => {
                     console.log(err);
                 })
            };

    return(
      <All>
      <ContainerGeral>
        <ContainerHeader>
          <ButtonRestart src={atualizar} onClick={clearMatchs}/>
          <Title>AstroMatch</Title>
          <ButtonMatch src={match} alt='erro' onClick={props.selectMatchs}/>
        </ContainerHeader>
        <ContainerBody>
          <ContainerUser>
            <ContainerImgUser>
              <ImgUser src={user.photo} />
            </ContainerImgUser> 
            <ContainerInfoUser>
              <Infos>{user.name}, {user.age}</Infos>
              <Infos>{user.bio}</Infos>
            </ContainerInfoUser>
          </ContainerUser>
        </ContainerBody>
        <ContainerFooter>
          <ButtonDislike onClick={buttonDislike}>✘</ButtonDislike>
          <ButtonLike onClick={buttonLike}>❤</ButtonLike>
        </ContainerFooter>
      </ContainerGeral>
      </All>
    )

};

export default HomePage;