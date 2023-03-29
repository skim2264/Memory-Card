import React from "react";

const Card = (props) => {
    const { image, clickImage } = props;
    return (
        <div className="cardDiv" onClick={clickImage} id={image.id}>
            <img className="image" src={image.link} alt={image.altMsg}></img>
        </div>
    )
}

export default Card;