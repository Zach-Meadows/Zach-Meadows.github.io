import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  margin: 5px;
  padding: 1px 5px;
  border-radius: 10px;
  font-family: "Comfortaa", cursive;
  width: 80vw;
`;
const StyledText = styled.textarea`
  resize: vertical;
  min-height: 200px;
  max-height: 400px;
  width: 80%;
  overflow: scroll;
  margin: 5px;
  font-size: 15px;
`;
const StyledInput = styled.input`
  margin: 5px;
  font-size: 15px;
`;
const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
`;
const FormLabel = styled.label`
margin-top: 10px;
`

function Contact(props) {
  return (
    <FormContainer>
      <EmailForm
        action="https://formsubmit.co/0f172a1551c7a4961f7b5d591d8145e6"
        method="POST"
        target="_blank"
      >
        <input type="hidden" name="_template" value="table"></input>
      <FormLabel>Your Name</FormLabel>
        <StyledInput type="text" name="name" placeholder="Name"/>
      <FormLabel>Your Email</FormLabel>
        <StyledInput
          type="email"
          name="email"
          placeholder="your@email.com"
          required
        />
        <FormLabel>Your Message</FormLabel>
        <StyledText
          name="message"
          placeholder="Please write your message here."
          required
        />
        <button type="submit">Send Email</button>
        <FormLabel style={{fontSize: "12px"}}>(This will open a new window.)</FormLabel>
      </EmailForm>
    </FormContainer>
  );
}

export default Contact;
