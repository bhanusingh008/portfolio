import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ProjectsImg from '../components/ProjectsImg';
import Form from '../components/Form';

export const Contact = () => {
  return (
    <div>
      <NavBar/>
      <ProjectsImg heading="Lets talk it." />
      <Form/>
      <Footer/>
    </div>
  )
}
