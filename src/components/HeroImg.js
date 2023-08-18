import './HeroImgStyles.css';
import {Link} from "react-router-dom";


import React from 'react';
import Home from '../assets/Home.jpg'

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
<img className='into-img'
src={Home} alt ='Home'/>


            </div>

            <div className='content'>
                <p> HI ,I'M PRABHU</p>
                <h1>Full Stack Develo<span>per</span></h1>
                <div>
                <Link to="/project" className='btn'>
                    PROJECTS</Link>
               <Link to="/contact" className='btn-right'>
                CONTACT</Link>
             </div>


            </div>
    
    </div>
  );
}

export default HeroImg;
