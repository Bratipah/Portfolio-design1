import React from 'react'
//import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
//import {BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {

  return (
  <>
    <Navbar />
      {/* Homepage */}
      <section className='homepage'>
          <div className='homepage-tag'>
            <h1>
              Hi, <span>I am Bratipah, Creative Technologist</span>
            </h1>
            <p>Jkdjnk Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button onNavigate={""} >Download Resume</button>
          </div>
          <div className='homepage-img'>
            <img src="" alt="" ></img>
          </div>
        </section>

        {/* Recent Posts */}

        {/* <section className='recents-posts'>
          <div className='recents'>
          <div className='recentsH-left'>
            <h2>Recent Posts</h2> 
          </div>
          <div className='recentsH-right'>
            <Link to='/works'>View all</Link>
          </div>
          <div className='recents1'></div>
          <div className='recents2'></div>
          </div>

        </section> */}

        {/* Work */}
        {/* Blog */}
        {/* Contact */}
</>
  )
}

export default Home