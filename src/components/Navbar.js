import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
    // const [activeLink, setActiveLink] = useState('home')
    // const onUpdateActiveLink = (value) => {
    //     setActiveLink(value);
    // }
    return (

      <>
        <div className="nav-full">
            <h1>Logo</h1>
            <span className="nav-links">
              <a href="home" >Home</a>
              <a href="skills" >Skills</a>
              <a href="projects">Projects</a>
            </span>
            <span className="nav-social">
              <a href="fb"><FaFacebookF /></a>
              <a href="tw"><FaTwitter /></a>
              <a href="yt"><FaInstagram /></a>
              
            </span>
            <button onClick={console.log('Hi')}>Let's connect</button>
        </div>
      </>
    )
  }
  
  export default NavBar;
  
  
  