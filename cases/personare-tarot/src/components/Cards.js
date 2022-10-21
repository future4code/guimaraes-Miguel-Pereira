import React from "react";

export class Card extends React.Component {
    render() {
        return(
            <div>
                <p>Nome: {this.props.text}</p>
            </div>
        )  
    }
} 