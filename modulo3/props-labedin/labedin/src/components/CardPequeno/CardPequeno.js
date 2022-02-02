import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className= "smallcard-container">
         <img src= {props.imagem}/>
         <h4> {props.info}</h4>
         <h6> {props.texto}</h6>
        </div>
    )
}

export default CardPequeno;