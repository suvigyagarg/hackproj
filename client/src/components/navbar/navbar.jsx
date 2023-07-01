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
       <Link className="link MealMatters" to="/">Meal Matters</Link>

      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem" onClick={handleLogout}>
            {user && "Logout"}
          </li>

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
          <li className='topListItem'>

            <Link className='link' to='/register'> Join Us </Link>
          </li>
        </ul>
    
      </div>

    </div>
  )
}

