//Layout - Ido Isaac - 301374969 - 09.26.2024
import React from 'react';
//Changed Link to NavLink to get the active link, for styling
import { NavLink } from 'react-router-dom';
import Logo from '../LogoBlue.png'

export default function Layout() {
  return (
    <>
    <div id='mainTitle'>
    <img src={Logo} id='logo' alt='Logo' width={100} height={100}/>
      <h1>Ido Isaac - Portfolio</h1>
      </div>
      <nav>
        <NavLink to="/" activeclassname="active">Home</NavLink> | 
        <NavLink to="/about" activeclassname="active">About</NavLink> | 
        <NavLink to="/education" activeclassname="active">Education</NavLink> | 
        <NavLink to="/project" activeclassname="active">Project</NavLink> | 
        <NavLink to="/contact" activeclassname="active">Contact</NavLink> | 
        <NavLink to="/services" activeclassname="active">Services</NavLink>
      </nav>
      <hr/>
    </>
  );
}

