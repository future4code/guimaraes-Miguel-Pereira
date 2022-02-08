import React from 'react';
import styled from 'styled-components'
import './CardPequeno.css'

const SmallcardContainer = styled.div`
display: flex;
align-items:center;
justify-items: flex-start;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 60px;
width: 550px;
`

const Imagem = styled.img`
width: 25px;
margin-right: 10px;
border-radius: 50%;
`

const NomeInformacoes = styled.h4`
margin-bottom: 5px;
margin-right: 5px;
`

const TextoInformacoes = styled.h5`
margin-bottom: 3px;
    font-size: small;
`

function CardPequeno(props) {
    return (
        <SmallcardContainer className= "smallcard-container">
         <Imagem src= {props.imagem}/>
         <NomeInformacoes> {props.info}</NomeInformacoes>
         <TextoInformacoes> {props.texto}</TextoInformacoes>
        </SmallcardContainer>
    )
}

export default CardPequeno;