import React from "react";

export class Card extends React.Component {

    render() {
        return(
            <div>
                <p>Nome: {this.props.text}</p>
                <img src={this.props.image} alt="" onClick={this.props.click}/>
                {/* <img src={this.state.BackCard} /> */}
            </div>
        )  
    }
} 