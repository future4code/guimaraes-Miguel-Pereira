import React from "react";

export const Card = (props) => {
    console.log(props)
    return(
        <div>
            <p>{props.text}</p>
            <img src={props.image}/>
        </div>
    )
}