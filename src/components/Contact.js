import React from "react";

function Contact() {
  return (
    <div>
      <form onSubmit={e => this.formSubmit(e)} style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
      }}>
        <label htmlFor="message-input">Your Message</label>
        <textarea
          name="message"
          type="text"
          placeholder="Please write your message here"
          required
        />

        <label htmlFor="message-name">Your Name</label>
        <input name="name" type="text" placeholder="Your Name" />

        <label htmlFor="message-email">Your Email</label>
        <input
          name="email"
          type="email"
          placeholder="your@email.com"
          required
        />

        <div>
          <button type="submit">Send Email</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
