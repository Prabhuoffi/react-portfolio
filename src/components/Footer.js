import './FooterStyles.css'
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={23} style={{ color: 'white', marginRight: '2rem' }} />

            <div>
              <p>97/286c,road street M.n.playam, Thimiri</p>
            </div>
          </div>

          <div className='phone'>
            <h4>
              <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
              6374942649
            </h4>
          </div>

          <div className='email'>
            <h4>
              <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem', marginTop: '1rem' }} />
              prabhugk@gmail.com
            </h4>
          </div>
        </div>

        <div className='right'>
          <h4>About the Company</h4>
          <p>This is me Prabhu. CEO & Founder of GKP Tech03. I enjoy discussing new projects and design challenges</p>

          <div className='social'>
            <a href="https://instagram.com/prabhugk_03?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{ color: 'white', marginRight: '1rem' }} />
            </a>
            <a href="https://github.com/Prabhuoffi" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: 'white', marginRight: '1rem' }} />
            </a>
            <a href="https://www.linkedin.com/in/prabhu-k-0b3a55254" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: 'white', marginRight: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
