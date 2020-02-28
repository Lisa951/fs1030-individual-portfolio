import React, { useState } from 'react';
import './App.css';

//This code is functions and JSX elements
function ContactForm() {
  const [email, setEmail] = useState();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [message, setMessage] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, firstName, lastName, message);
    let url = ""
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ email, firstName, lastName, message })
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



  //this is what is visible on the UI on the Contact page 
  return (
    

    <form className="form" onSubmit={handleSubmit}>

        

      <h1 className="container_form">Let's Connect</h1>

      <label htmlFor="inputEmail" className="sr-only">Email address:</label>
      <input onChange={handleEmailInput} type="email" id="inputEmail" className="form-control" placeholder="Add your Email" required autoFocus />


      <label htmlFor="inputFirstName" className="sr-only">First Name:</label>
      <input onChange={handleFirstNameInput} type="text" id="inputFirstName" className="form-control" placeholder="First Name" required />

      <label htmlFor="inputLastName" className="sr-only">Last Name:</label>
      <input onChange={handleLastNameInput} type="text" id="inputLastName" className="form-control" placeholder="Last Name"  />

      <label htmlFor="inputMessage" className="sr-only">Message:</label>
      <textarea onChange={handleMessageInput} type="text" id="inputMessage" rows="3" cols= "30" className="form-control" placeholder="Leave a message..."  />


      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn" type="submit">Submit</button>
     
    </form>
  );
}

export default ContactForm;