import React, { useState } from 'react';
import './App.css';

function ContactForm() {
  const [email, setEmail] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [message, setMessage] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, firstName, lastName, message);

    let url = "http://localhost:7000/contact"
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, firstName, lastName, message }),
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  function handleEmailInput(event) {
    setEmail(event.target.value)
  }

  function handleFirstNameInput(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameInput(event) {
    setLastName(event.target.value)
  }

  function handleMessageInput(event) {
    setMessage(event.target.value)
  }



  return (


    <form className="form" onSubmit={handleSubmit}>



      <h1 className="container_form">Let's Connect</h1>

      <label htmlFor="inputEmail" className="input">Email address:</label>
      <input onChange={handleEmailInput} type="email" id="inputEmail" className="input" placeholder="Add your Email" required autoFocus />


      <label htmlFor="inputFirstName" className="input">First Name:</label>
      <input onChange={handleFirstNameInput} type="text" id="inputFirstName" className="input" placeholder="First Name" required />

      <label htmlFor="inputLastName" className="input">Last Name:</label>
      <input onChange={handleLastNameInput} type="text" id="inputLastName" className="input" placeholder="Last Name" />

      <label htmlFor="inputMessage" className="input">Message:</label>
      <textarea onChange={handleMessageInput} type="text" id="inputMessage" rows="3" cols="30" className="input" placeholder="Leave a message..." />



      <button className="btn" type="submit">Submit</button>

    </form>
  );
}

export default ContactForm;