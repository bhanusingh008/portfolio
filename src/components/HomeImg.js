import React from 'react'
import './HomeImgStyle.css';
import hero from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

function HomeImg() {
  return (
    <div className='hero'>

        <div className='mask'>
        <img className='introImg' src={hero} alt='Background IMG'></img>
        </div>

        <div className='content'>
          <p>
          Hey, im a Full-Stack Software Develeoper, this website you see is done in React.js.
          </p>
          <Link to='/projects' className='btn'>
            Projects
          </Link>

          <Link to='/contact' className='btn btn-light'>
            Contact
          </Link>

        </div>

    </div>
  )
}

export default HomeImg