import React from 'react'
import ArtEx from './ArtEx'
import MC from "../images/halo.jpg"

const manyArts = [
    {
        name: "Master Cheif",
        url: "/",
        info: "Master Cheif armor from Halo.",
        image: MC,
        used: []
    }
]

function Art(){
    return(
        <div>
            {manyArts.map((item, i) => {
                return <ArtEx {...item} key={i}/>
            })}
        </div>
    )
}

export default Art