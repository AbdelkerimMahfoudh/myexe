import { useState, useEffect } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    // const [scrolled, setScrolled] = useState(false)

    // useEffect (() => {
    //     const onScroll = () => {
    //         if(window.scrollY>50) {
    //             setScrolled(true);
    //         }
    //         else {
    //             setScrolled(false);
    //         }
    //     }
    //     window.addEventListener('scroll', onScroll);
    //     return(window.removeEventListener('scroll',onScroll));
    // },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (

      <>
        <div className="nav-full">
            <h1>Logo</h1>
            <span className="nav-links">
              <a href="home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</a>
              <a href="skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</a>
              <a href="projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a>
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
  
  
  