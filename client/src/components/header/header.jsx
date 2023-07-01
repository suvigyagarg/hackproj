import React from 'react'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>For everyone</span>
            <span className='headerTitleLg'>Meal Matters</span>
        </div>
        <img className='headerImg' src='https://images.pexels.com/photos/6995221/pexels-photo-6995221.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
    </div>
  )
}
