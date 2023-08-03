import './App.css';
import React from 'react';
import './index.css';
import Home from './routes/Home';
import Projects from './routes/Projects';
import { About } from './routes/About';
import { Contact } from './routes/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
