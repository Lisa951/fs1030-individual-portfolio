import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

//This code is functions and JSX elements
function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email, password);
    let url = "http://localhost:7000/login"
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({email, password})
    })
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }

  function handleEmailInput(event) {
    setEmail(event.target.value)
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value)
  }
//this is what is visible on the UI on the Contact page 
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <img className="mb-4" src={logo} alt="" width="72" height="72" />
      <h1 className="h3 mb-3 font-weight-normal">Please sign In</h1>
      <label htmlFor="inputEmail" className="sr-only">Email address</label>
      <input onChange={handleEmailInput} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
      <label htmlFor="inputPassword" className="sr-only">Password</label>
      <input onChange={handlePasswordInput} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </form>
  );
}

export default LoginForm;