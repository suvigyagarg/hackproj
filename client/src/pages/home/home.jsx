
import './home.css'
import Header from '../../components/header/header'
import { Link } from 'react-router-dom'
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jfif'
import image4 from './images/image4.jfif'
import image5 from './images/image5.jfif'
import image6 from './images/image6.jfif'
export default function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <div className="problemContainer">
          <h1 className='problemTitle'>The Problem</h1>
          <p className='ProblemStatement'>The challenge is not a lack of food — it is making food consistently available to everyone who needs it.</p>
          <div className="problems">
            <div className="problem">
              <img src={image1} alt='' />
              <p>Every year, 1.3 billion tonnes of food is wasted. That’s equivalent to the weight of 2133 Empire State Buildings. </p>
            </div>
            <div className="problem">
              <img src={image2} alt="" />
              <p>82% of hungry people live in countries with food surpluses, not food shortages</p>
            </div>
            <div className="problem">
              <img src={image3} alt="" />
              <p>Approximately 149 million children under the age of five worldwide suffer from stunted growth due to chronic malnutrition.</p>
            </div>
            <div className="problem">
              <img src={image4} alt="" />
              <p>One-third of the food produced around the world is never consumed</p>
            </div>
            <div className="problem">
              <img src={image5} alt="" />
              <p>Hunger kills more people each year than AIDS, malaria and terrorism combined</p>
            </div>
            <div className="problem">
              <img src={image6} alt="" />
              <p>Every 10 seconds, a child dies from hunger</p>
            </div>
          </div>
        </div>
        <div className="solutionContainer">
          <h1 className='solutionTitle'>The Solution</h1>
          <div className="solution">
            <span className="joinUs">It's not the food shortage but food wastage that is inching the world to increasing hunger. In our own innovative way, Meal Matters enables convenient movement of food from you to the needy to help them sleep with a full stomach</span>
            <Link to="/donation">
              <button className='solutionButton'>
                Donate
              </button>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}
