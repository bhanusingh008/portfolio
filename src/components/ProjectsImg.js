import React, { Component } from 'react'
import './ProjectImgStyle.css';
import projectImg from './projectsBg.jpeg';

class ProjectsImg extends Component{
    render(){
        return (
            <div className='hero'>
                <div className='mask'>
                <img className='projectImg' src={projectImg} alt='projectsBg'></img>
                <div className='heading'>
                <h1>{this.props.heading}</h1>
                <p>{this.props.text}</p>
                </div>
                </div>
            </div>
          )
    }
}

export default ProjectsImg