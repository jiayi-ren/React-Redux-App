import React from 'react';

const Card = props =>{

    console.log("Card")

    const { data} = props

    const imgSrc = `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`

    const imgAlt = `${data.name}'s Image`

    return(
        <div>
            <img src={imgSrc} alt={imgAlt}></img>
            <p>{data.name}</p>
        </div>
    )
}

export default Card;