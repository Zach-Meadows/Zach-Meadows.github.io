import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import css from '../images/css.png'
import html from '../images/html.png'
import mongo from '../images/mongo.png'
import python from '../images/python.png'
import ReactIcon from '../images/react.png'
import ReduxIcon from '../images/Redux.png'
import JS from '../images/javascript.svg'
import GA from '../images/GA.png'
import HS from '../images/lchs.jpg'

const ResumeContain = styled.div`
width: 90vw;
background-color: rgba(255, 255, 255, 0.8);
margin: 10px;
padding: 1px 5px;
border-radius: 10px;
font-family: 'Comfortaa', cursive; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const FlexSkill = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
margin: 10px 0 50px 0;
`

const SkillImage = styled.img`
width: 20%;
height: 100px;
margin: 10px;
object-fit: contain;
position: center;
`
const FlexSchool = styled.div`
display: flex;
flex-direction: column;
`
const SchoolItem = styled.div`
margin: 5px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: solid 2px black;
`
const ResumeSectionHead = styled.h2`
margin: 0;
text-decoration: underline;
`
const DownloadResume = styled(Link)`
background-color: white;
padding: 10px;
margin: 10px;
border-radius: 10px;
cursor: pointer;
box-shadow: .2rem .2rem .4rem rgba(0,0,0,.5);
:hover{
    background-color: gray;
}
:active{
    background-color: lightcoral;
}

`

const ArraySkills = [html,css,JS,mongo,python,ReactIcon,ReduxIcon]

function Home(props) {
    return( 
        <ResumeContain>
            <h1>Resume</h1>
            <div>
                <ResumeSectionHead>Skills</ResumeSectionHead>
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