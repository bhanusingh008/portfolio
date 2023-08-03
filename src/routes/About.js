import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectsImg from '../components/ProjectsImg';
import AboutContent from '../components/AboutContent';

export const About = () => {
  return (
    <div>
      <NavBar/>
      <ProjectsImg heading="About"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
};

export default About;
