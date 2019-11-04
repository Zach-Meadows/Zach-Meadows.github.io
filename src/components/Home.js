import React from "react"
import styled from "styled-components"
import css from '../images/css.png'
import html from '../images/html.png'
import mongo from '../images/mongo.png'
import python from '../images/python.png'
import ReactIcon from '../images/react.png'
import ReduxIcon from '../images/Redux.png'
import JS from '../images/javascript.svg'

const ResumeContain = styled.div`
width: 90vw;
background-color: rgba(255, 255, 255, 0.8);
margin: 10px;
padding: 1px 5px;
border-radius: 10px;
font-family: 'Comfortaa', cursive; 
`
const FlexSkill = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
margin: 10px
`

const SkillImage = styled.img`
width: 20%;
height: 100px;
margin: 10px;
object-fit: contain;
position: center;
`
const ArraySkills = [html,css,JS,mongo,python,ReactIcon,ReduxIcon]

function Home() {
    return( 
        <ResumeContain>
            <h2>Resume</h2>
            <div>
                <h3>Skills</h3>
                <FlexSkill>
                {ArraySkills.map((item, i)=>{
                    return (
                        <SkillImage src={item} key={i}></SkillImage>
                    )
                })}</FlexSkill>
            </div>
        </ResumeContain>
    )
}

export default Home