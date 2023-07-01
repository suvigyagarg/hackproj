import React, { useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import image from './images/image.jpg'

export default function Register() {
  const [username, setUsername] = useState
  ('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
      e.preventDefault()
      setError(false);
      try{
          const res = await axios.post('/auth/register', {
              username,
              email,
              password,
          })
          res.data && window.location.replace('/login')
      }
      catch(err){
          setError(true)
      }
  }

    

  return (
    <div className='login'>

      <img className='loginImg' src={image} alt='' />
      <div className="headerContent">
        <div className="overlay">
        <span className="signupTitle">Join Us</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" className="registerInput" placeholder="Enter your username..."
            onChange={e => setUsername(e.target.value)}
            />
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..."
            onChange={e => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password..."
            onChange={e => setPassword(e.target.value)}
            />
            <button className="registerButton btn btn-dark btn-lg" type='submit'>Be the Change</button>
            <button className="registerLoginButton">
              <Link className='link' to='/login'>Already a User</Link>
            </button>
            {error && <span>Something went wrong!</span>}
        </form>
        </div>
      </div>
    </div>
    
  )
}

