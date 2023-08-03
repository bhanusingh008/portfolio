import React from 'react'
import './FooterStyle.css';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{
                        color:"#fff",
                        marginRight:"1rem"
                    }}/>
                    Sector-16, Faridabad, Haryana<br />
                    India.
                </div>

                <div className='phone'>
                    <FaPhone size={20} style={{
                        color:"#fff",
                        marginRight:"1rem"
                    }}/>
                    +91-8448203692
                </div>

                <div className='email'>
                    <FaMailBulk size={20} style={{
                        color:"#fff",
                        marginRight:"1rem"
                    }}/>
                    bhanusingh0605@gmail.com
                </div>

            </div>
            <div className='right'>
                <h1>Here are my socials</h1>
                <div className='social'>
                    <div className='linkedIn'>
                    <FaLinkedin size={20} style={{color:"#fff", marginRight:"1rem", marginBottom:"1rem"}}/>
                    <a href='https://www.linkedin.com/in/bhanusingh0605/' target='_blank'>LinkedIn</a>
                    </div>
                    <div className='github'>
                    <FaGithub  size={20} style={{color:"#fff", marginRight:"1rem"}}/>
                    <a href='https://github.com/bhanusingh008' target='_blank'>Github</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;