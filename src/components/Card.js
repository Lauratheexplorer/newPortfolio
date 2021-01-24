// card element containing image and blurb

import React from "react";


const Card = (props) => {
    const { src, name, description, seeLive, sourceCode } = props;
    return (
        <div className="pa4 tc">
            <img className="vh-50-ns" alt='website examples' src={src} ></img>
            <details className="mt4 pb3">
                <summary className="f3">{name} </summary>
                <h4>{description}{sourceCode}{seeLive}</h4>
            
            </details>
        </div>
    )
};

export default Card;