import React from "react";
import styled from "styled-components"

const FormContainer = styled.div`
background-color: rgba(255, 255, 255, 0.8);
margin: 5px;
padding: 1px 5px;
border-radius: 10px;
font-family: 'Comfortaa', cursive;
width: 80vw;
`
const StyledText = styled.textarea`
resize: vertical;
min-height: 200px;
max-height: 400px;
width: 80%;
overflow: scroll;
margin: 5px;
font-size: 15px;
`
const StyledInput = styled.input`
margin: 5px;
font-size: 15px;

`

function Contact() {
  return (
    <FormContainer>
      <form onSubmit={e => this.formSubmit(e)} style={{
          display: "flex",
          justifyContent: "center",
          alignItems: 'center',
          flexDirection: "column",
          margin: '10px'
      }}>
        

        <label htmlFor="message-name">Your Name</label>
        <StyledInput name="name" type="text" placeholder="Your Name" />

        <label htmlFor="message-email">Your Email</label>
        <StyledInput
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />

  
        <label htmlFor="message-input">Your Message</label>
        <StyledText
          name="message"
          type="text"
          placeholder="Please write your message here"
          required
        />
              <div>
          <button type="submit">Send Email</button>
        </div>
      </form>
    </FormContainer>
  );
}

export default Contact;
