import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import headshot from "../images/headshot.jpg";
import Lax from "../images/snorlaxMe.jpg"

const HoverLink = styled(Link)`
  color: rgb(3, 102, 214);
  :visited {
    color: rgb(3, 102, 214);
  }
  :hover {
    text-decoration: underline;
  }
`;

const MyImage = styled.img`
  width: 200px;
  margin: 5px;
  float: right;
  box-shadow: 0 0.2rem 1rem rgba(0,0,0,.5);
  @media only screen and (max-width: 800px) {
    width: 50%;
  }
`;
const LaxImage = styled.img`
margin: 5px;
  width: 400px;
  float: left;
  box-shadow: 0 0.2rem 1rem rgba(0,0,0,.5);
  @media only screen and (max-width: 800px) {
    width: 90%;
  }
`;
const TextImageContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  max-height: 50%;
  box-sizing: border-box;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const AboutContainer = styled.div`
  width: 90vw;
  margin-bottom: 20px;
  padding: 10px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px 0 20px;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    p{
      margin: 0;
      font-size: 12px;
    }
  }
`;

function About(props) {
  return (
    <AboutContainer>
      <h3>Hi, I'm Zach Meadows and I'm a Software Engineer.</h3>
      <TextImageContain>
        <MyImage src={headshot}></MyImage>
        <p>
          I'm a creative mind born and raised in northern Virgina. I've always
          been torn between creative outlets and computer related studies, until
          I realized that I could have the best of both worlds with programming.
          For all of my life I have interacted with computers. Starting with a
          laptop with hardware and software problems, I quickly tasked myself
          with finding the solutions to its' dysfunctions and from there my
          problem solving and curiosity began. Using the tools I had and the
          early stages of Google, I diagnosed and fixed all problems to allow me
          to have a simple laptop to play games on in my early teens. Now I use
          these skills and practices I developed to solve engineering problems,
          and in my free time build things for my own curiosity.
        </p>
          
      </TextImageContain>

      <TextImageContain>
        <LaxImage src={Lax}></LaxImage>
        <p>
          After work hours I spend most of my time creating things, across
          multiple mediums. My most recent pet project is a game I'm building
          called "<HoverLink target="_blank"to="/glitchy-game"  rel="noopener noreferrer">Working Title</HoverLink>." It's not done, and that's the whole premise of
          the game, but we can get into that some other time. Additionally I
          make cosplay, costumes, and suits or and other form of replicated
          fandom which you can see examples of{" "}
          <HoverLink to="/art">HERE</HoverLink>. There are some times when I
          don't make stuff and instead I hang out with friends and go out on
          hikes. When I don't have the energy for those things, I like to do
          more simple things like play video games, board games, and card games.
          Adventure games like Skyrim, card games like Magic: the Gathering, and
          the occasional game of Mysterium are my favorite ways to unwind.
         
        </p> 
      </TextImageContain>
    </AboutContainer>
  );
}

export default About;
