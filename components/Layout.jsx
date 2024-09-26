//Layout - Ido Isaac - 301374969 - 09.26.2024
import React from 'react';
//Changed Link to NavLink to get the active link, for styling
import { NavLink } from 'react-router-dom';
import Logo from '../src/LogoBlue.png'

export default function Layout() {
  return (
    <>
    <div id='mainTitle'>
    <img src={Logo} id='logo' alt='Logo' width={100} height={100}/>
      <h1>Ido Isaac - Portfolio</h1>
      </div>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink> | 
        <NavLink to="/about" activeClassName="active">About</NavLink> | 
        <NavLink to="/education" activeClassName="active">Education</NavLink> | 
        <NavLink to="/project" activeClassName="active">Project</NavLink> | 
        <NavLink to="/contact" activeClassName="active">Contact</NavLink> | 
        <NavLink to="/services" activeClassName="active">Services</NavLink>
      </nav>
      <hr/>
    </>
  );
}

