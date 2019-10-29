import React from 'react'
import ArtEx from './ArtEx'
import MC from "../images/halo.jpg"
import lax from "../images/Snorlax.jpg"
import big from "../images/Big.jpg"
const manyArts = [
    {
        name: "Snorlax",
        info: "Full size realistic Snorlax from Pokemon.",
        image: lax,
    },
    {
        name: "Big the Cat",
        info: "Full size realistic Big the Cat from Sonic the Hedgehog series.",
        image: big,
    },
    {
        name: "Master Cheif",
        info: "Master Cheif armor from Halo.",
        image: MC,
    },
  
]

function Art(){
    return(
        <div style={{
            display: "flex",
            flexDirection: "column"
        }}>
            {manyArts.map((item, i) => {
                return <ArtEx {...item} key={i}/>
            })}
        </div>
    )
}

export default Art