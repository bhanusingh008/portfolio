import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectsImg from '../components/ProjectsImg';
import WorkCard from '../components/WorkCard';

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <ProjectsImg heading="Projects" text="Recent Projects" />
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Projects;
