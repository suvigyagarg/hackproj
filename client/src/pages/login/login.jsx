import React, { useContext, useRef } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import axios from 'axios';
import image from './images/image.jpg'
export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    }

    catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  }

  return (
    <div className='login'>

      <img className='loginImg' src={image} alt='' />
      <div className="headerContent">
        <div className="overlay">
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label >Username</label>
            <input type="text" className="loginInput" placeholder="Enter your username..." ref = {userRef}/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." ref ={passwordRef}/>
            <button className="loginButton btn btn-lg btn-dark" type='submit' disabled={isFetching}>Login</button>
            <button className="loginRegisterButton">
              <Link className='link' to='/register'>Sign Up with Us</Link>
            </button>
        </form>
        </div>
      </div>
    </div>

  )
}
