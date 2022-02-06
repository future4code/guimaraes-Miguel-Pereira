import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className= "smallcard-container">
         <img src= {props.imagem}/>
         <h4> {props.info}</h4>
         <h5> {props.texto}</h5>
        </div>
    )
}

export default CardPequeno;