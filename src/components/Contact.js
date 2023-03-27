import React, { useState } from "react";

function Contact() {
  // Declare necessary variables for form and set initial states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  // Build the form submit event handler functionality
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Reset the input fields to empty
    setName('');
    setEmail('');
    setContent('');
  }

  // Component contents to be rendered
  return (
    <div>
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="email@gamil.com" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />
                        
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="textarea" id="message" placeholder="Write Message Here" value={content} onChange={(event) => setContent(event.target.value)} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
    </div>
  );
}

export default Contact;
