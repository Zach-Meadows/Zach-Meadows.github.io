import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
const lotus = require('lotus-ipsum')

const HoverLink =  styled(Link)`
color: rgb(3, 102, 214);
:visited {
    color: rgb(3, 102, 214)
}
:hover {
    text-decoration: underline;
}
`

function About(){
    return(
        <div className="text" style={{
            width: "90vw",
            marginBottom: "20px",
            padding: "10px",
            boxSizing: "border-box"
        }}>
            <div><h3>Hi, I'm Zach Meadows and I'm a Software Engineer.</h3>
                I'm a creative mind born and raised in northern Virgina. 
                I've always been torn between creative outlets and computer related studies, 
                until I realized that I could have the best of both worlds with programming. 
                For all of my life I have interacted with computers. Starting with a laptop with hardware and software problems, 
                I quickly tasked myself with finding the solutions to its' dysfunctions and from there my problem solving and curiosity began. 
                Using the tools I had and the early stages of Google, I diagnosed and fixed all problems to allow me to have a simple laptop to play games on in my early teens. 
                Now I use these skills and practices I developed to solve engineering problems, and in my free time build things for my own curiosity. 
                
                After work hours I spend most of my time creating things, across multiple mediums. My most recent pet project is a game I'm building called "Working Title." 
                It's not done, and that's the whole premise of the game, but we can get into that some other time. 
                Additionally I make cosplay, costumes, and suits or and other form of replicated fandom which you can see examples of <HoverLink to="/art">HERE</HoverLink>.  
                There are some times when I don't make stuff and instead I hang out with friends and go out on hikes. 
                When I don't have the energy for those things, I like to do more simple things like play video games, board games, and card games. 
                Adventure games like Skyrim, card games like Magic: the Gathering, and the occasional game of Mysterium are my favorite ways to unwind.</div>
        </div>
    )
}

export default About