import React from 'react';

export class Header extends React.Component {

    onClickButton = () => {
        alert("O botão foi clicado")
    }

    render() {
        return(
        <div className='div-header'>
            <span/>
            <p>Bem Vinde ao Personare-Tarot</p>
            <button className='start-text' onClick={this.onClickButton}>Começar</button>
        </div>
        )
    }
}