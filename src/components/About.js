import React from "react"
const lotus = require('lotus-ipsum')

function About(){
    return(
        <div className="text">
            <p>{lotus(1)}</p>
        </div>
    )
}

export default About