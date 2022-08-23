import './App.css';
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import { BrowserRouter } from "react-router-dom";
import {Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App"> 
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ="/" element = {<Home />} />
        <Route path ="/work" element = {<Work />} />
        <Route path ="/blog" element = {<Blog />} />
        <Route path ="/contact" element = {<Contact />} />
        {/* </Route> */}
      </Routes>
     
    </BrowserRouter>
    </div>
  );
}

export default App;

