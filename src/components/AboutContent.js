import React from 'react'
import profile from '../assets/profile.jpg';
import './AboutContentStyle.css';

function AboutContent() {
  return (
    <div className='about'>
        <div className='about-container'>
            <img className='profile' src={profile} alt='image'/>
            <p>Hey there!, I am a full stack web developer with skills in Java,<br/>
                Spring Boot, MySQL, React.js, Hibernate/JPA.
            </p>
        </div>
    </div>
  )
}

export default AboutContent