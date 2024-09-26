import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/LogoBlue.png'

export default function Layout() {
  return (
    <>
    <div id='mainTitle'>
    <img src={Logo}
    id='logo'
    alt='Logo'
    width={100}
    height={100}/>
      <h1>Ido Isaac - Portfolio</h1>
      </div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/education">Education</Link> | 
        <Link to="/project">Project</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/services">Services</Link>
      </nav>
      <hr/>
      
    </>
    
  );
}

