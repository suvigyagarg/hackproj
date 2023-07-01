import React from 'react';
import './header.css';
import hero from './images/heroimage.jpg'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>For everyone</span>
            <span className='headerTitleLg'>Meal Matters</span>
        </div>
        <img className='headerImg' src={hero} alt=''/>
    </div>
  )
}
