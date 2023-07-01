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
        <img src="https://media.discordapp.net/attachments/755069019870068878/1124383829587669033/Meal_Matters-1_1.png?width=606&height=606" alt="" />
        <div className="webName">MealMatters</div>
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


      
      
        
{user ?  <span className="username">Welcome</span> : (
  <ul className='topList'>
  <li className='topListItem'>
          <Link className='link' to='/login'> LOGIN </Link>
        </li>
        <li className='topListItem'>

          <Link className='link' to='/register'> REGISTER </Link>
        </li>
          </ul>
) }
      </div>

    </div>
  )
}

