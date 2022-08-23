import React from 'react'
import { Link } from 'react-router-dom';
import homepage from '../components/home/homepage.Js';
import RecentPost from '../components/home/RecentPost';

//import {BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = () => {

  return (
  <>
      {/* Homepage */}

        <Homepage />

        {/* Recent Posts */}

        <RecentPost />

        {/* Work */}
        {/* Blog */}
        {/* Contact */}
  </>
  )
}

export default Home