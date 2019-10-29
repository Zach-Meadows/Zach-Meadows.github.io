import React from "react"

function ArtEx(props){
    return(
        <div style={{
            display: 'flex'
        }}>
        <div style={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: 'contain',
            backgroundRepeat: "no-repeat",
            width: "500px",
            height: "500px"
        }}>

        </div>
        </div>
    )
}

export default ArtEx