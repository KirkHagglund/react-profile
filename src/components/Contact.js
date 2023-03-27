import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/contact.css";

function Contact() {
  // Declare necessary variables for form and set initial states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  // Build the form submit event handler functionality
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset the input fields to empty
    setName("");
    setEmail("");
    setContent("");
  };

  // Component contents to be rendered
  return (
    <div className="form-container">
      <h1>Contact Me</h1>
      <Form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <Form.Label htmlFor="name">Name</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="email@gamil.com"
            aria-describedby="emailHelp"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            type="text"
            id="message"
            placeholder="Write Message Here"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
