import React from 'react';
import styled from 'styled-components'
import './CardGrande.css'

const BigcardContainer = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ContainerNomes = styled.div`
display: flex;
flex-direction: column;
justify-items: flex-start;
`

const Imagem = styled.img `
width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Nomes = styled.h4 `
margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <BigcardContainer className="bigcard-container">
            <Imagem src={ props.imagem } />
            <ContainerNomes>
                <Nomes>{ props.nome }</Nomes>
                <p>{ props.descricao }</p>
            </ContainerNomes>
        </BigcardContainer>
    )
}

export default CardGrande;