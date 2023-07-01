
import './home.css'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Header/>
      <div className='home'>
        <div className="problemContainer">
          <h1 className='problemTitle'>The Problem</h1>
          <div className="problems">
            <div className="problem">
              <img src = "https://www.conserve-energy-future.com/wp-content/uploads/2017/11/food-waste-america.jpg" alt=''/>
              <p>Every year, 1.3 billion tonnes of food is wasted. That’s equivalent to the weight of 2133 Empire State Buildings. </p>
          </div>
          <div className="problem">
            <img src="https://images.pexels.com/photos/1657935/pexels-photo-1657935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
        </div>
          <div className="problem">
            <img src="https://images.pexels.com/photos/1657935/pexels-photo-1657935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
        </div>
          <div className="problem">
            <img src="https://images.pexels.com/photos/1657935/pexels-photo-1657935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
        </div>
          <div className="problem">
            <img src="https://images.pexels.com/photos/1657935/pexels-photo-1657935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
        </div>
          <div className="problem">
            <img src="https://images.pexels.com/photos/1657935/pexels-photo-1657935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
        </div>
        </div>
        </div>
        <div className="solutionContainer">
          <h1 className='solutionTitle'>The Solution</h1>
          <div className="solution">
            <span className="joinUs">Join Us in our Mission to make food available for everyone and prevent food wastage.</span>
            <Link to="/donation">  
            <button className='solutionButton'>
              Donate Now !!!
            </button>
            </Link>
          </div>
          
        </div>
      </div>
    </>
  )
}
