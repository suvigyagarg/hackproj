import './navbar.css'
import { Link } from 'react-router-dom'
import { Context } from "../../context/Context"
import { useContext } from "react"
import logo from './images/logo.png'

export default function Navbar() {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };



  return (
    <div className="top">
      <div className="topLeft">

        <img className="logo" src={logo} alt="" />
        <span className="MealMatters">Meal Matters</span>

      </div>
      <div className="topCenter">
        <ul className="topList">

        </ul>
      </div>
      <div className="topRight">

        <ul className='topList'>
          <li className="topListItem">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">About Us</Link>
          </li>
          {user ? (<li className="topListItem link" onClick={handleLogout}>
            {user && "Logout"}
          </li>):
          (<>
            <li className='topListItem'>
            <Link className='link' to='/login'> Login </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/register'> Register </Link>
          </li>
          </>)}
        </ul>
      </div>

    </div>
  )
}

