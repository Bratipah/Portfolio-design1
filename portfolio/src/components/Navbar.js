import React from 'react'
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='nav'>
      { /* Navbar */}
      <ul className='nav-link'>
        <li><Link to='Work'>Works</Link></li>
        <li><Link to='Blog'>Blog</Link></li>
        <li><Link to='Contact' >Contact</Link></li>
      </ul>
      
      {/* Footer */}
    </div>
  )
}

export default Navbar