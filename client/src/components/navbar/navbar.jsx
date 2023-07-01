import './navbar.css'
import {Link} from 'react-router-dom'
import {Context} from "../../context/Context"
import {useContext} from "react"

export default function Navbar() {
    const {user,dispatch} = useContext(Context)

  const handleLogout = () => {
    dispatch({type:"LOGOUT"});
  };

  return (
    <div className="top">
      <div className="topLeft">
        
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/donation">DONATE</Link>
          </li>
          
          <li className="topListItem" onClick={handleLogout}> 
            {user && "LOGOUT"}
          </li>

        </ul>
      </div>
      <div className="topRight">
        <ul className='topList'>
        <li className='topListItem'>

          <Link className='link' to='/login'> LOGIN </Link>
        </li>
        <li className='topListItem'>

          <Link className='link' to='/register'> REGISTER </Link>
        </li>
          </ul>
      </div>

    </div>
  )
}

