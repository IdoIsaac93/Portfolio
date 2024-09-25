import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <img src='client\src\Logo.png'
    alt='Logo'
    width={50}
    height={50}/>
      <h1 id="mainTitle">Ido Isaac - Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}

