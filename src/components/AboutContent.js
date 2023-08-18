import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import developer from '../assets/developer.jpg';
import fullstack from '../assets/fullstack.jpg';

import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>

<div className='left'>
  <h1> Who Am I?</h1>
  <p> I'm a Full stack developer. 
    I create responsive secure Websites for my clients</p>
  <div className='center-button-container'>
    <Link to='/contact'>
      <button className='btn'>Contact</button>
    </Link>
  </div>
</div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src ={fullstack}
                    className='img' alt='true'/>
       
                <div className='img-stack bottom'>
                    <img src ={developer}
                    className='img' alt='true'/>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent
