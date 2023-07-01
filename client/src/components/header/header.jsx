import React from 'react';
import './header.css';
import hero from './images/heroimage.jpg'

export default function Header() {
  return (
    <div className='header'>
    
    <img className='headerImg' src={hero} alt=''/>
    <div className="headerContent">
      <div className="overlay">
      <div className='headerTitles'>
      <span className='headerTitleLg'>Meal Matters</span>
    </div>
      <div className='content'>
      <p className="description lead">Donate food. Feed hope. Join us in the fight against hunger. Together, we can make a difference.</p>
      <button className='btn btn-dark btn-lg change'>Be the Change</button>
        </div>
      </div>
    </div>
  </div>
  )
}
