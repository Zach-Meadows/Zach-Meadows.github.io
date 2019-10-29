import React from "react"

function ArtEx(props){
    return(
        <div style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "10px",
            borderRadius: "20px",
            fontFamily: "'Comfortaa', cursive"
        }}>
                <h2>{props.name}</h2>
                <a href="https://www.facebook.com/BlackMeadowStudio/" style={{
                    
                }}>More</a>
                <p>{props.info}</p>
        <img src={props.image} style={{
            borderRadius: "0 0 20px 20px",
            width: "90vw"
        }}/>
       
        </div>
    )
}

export default ArtEx