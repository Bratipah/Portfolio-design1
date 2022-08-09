import React from 'react'
import Navbar from '../components/Navbar';
//import {BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {

  return (
    <section>Home
      <Navbar />
      {/* Homepage */}
      <div className='homepage'>
          <div className='homepage-tag'>
            <h1>
              Hello, <span>I'm a software developer</span>
            </h1>
            <p></p>
            <button onClick={""}>Contact Me</button>
          </div>
          <div className='homepage-img'>
            <image src="" alt="" ></image>
          </div>
        </div>

        {/* Work */}
        {/* Blog */}
        {/* Contact */}
        

    </section>
  )
}

export default Home