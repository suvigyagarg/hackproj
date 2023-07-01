import React, { useContext, useRef } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const {dispatch, isFetching} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: "LOGIN_START"});
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({type: "LOGIN_SUCCESS", payload: res.data});
    }

    catch(err) {
      dispatch({type: "LOGIN_FAILURE"});
    }
  }

  return (
    
    <div className='login'>
      <div className="loginImg">
        <img src="https://images.pexels.com/photos/6646858/pexels-photo-6646858.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="loginWrapper">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="loginInput" placeholder="Enter your username..." ref = {userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." ref ={passwordRef}/>
            <button className="loginButton" type='submit' disabled={isFetching}>Login</button>
            <button className="loginRegisterButton">
              <Link className='link' to='/register'>Register</Link>
            </button>
        </form>
      </div>
    </div>
    
  )
}
