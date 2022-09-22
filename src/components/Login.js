import React from "react";
import { useRef, useState, useEffect } from 'react'

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [ user, pass ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pass);
    setUser('');
    setPass('');
    setSuccess(true);
  }

  return (
    <>
    {
      success ? (
        <section className="container-form">You're Login.</section>
      ) : (
        <section className="container-form">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="asertive">      
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form className="login" onSubmit={handleSubmit}>
            <label className="label" htmlFor='username'>Username:</label>
            <input 
              className="input"
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required 
            />
    
            
            <label className="label" htmlFor='password'>Password:</label>
            <input 
              className="input"
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required 
            />
    
            <button className="btn-login">Sign In</button>
          </form>
        </section>
      )
    }
    </>
  )
}

export default Login;