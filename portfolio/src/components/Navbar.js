import React from 'react'
import "./NavbarStyle.css";
import Link from "react-router-dom";

const Navbar = () => {
  return (
    <section className='header'>
      {/* Navbar */}
        <Link>
          <ul>
            <li></li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </Link>
      
      {/* Footer */}
    </section>
  )
}

export default Navbar