import React, { useState } from "react";
import {Link, animateScroll as scroll} from 'react-scroll'
import "./Navbar.css";

export const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(true);

  const handleMobileActive = () => setMobileActive(!mobileActive)

  const removeMenuMobile = () => setMobileActive(false)
  
  const toTop = scroll.scrollToTop
  return (
    <nav className="navbarWrapper">
      <ul className='navbar'>
        <Link onClick={toTop} to='/' className='logo'>RAFAŁFUZ</Link>
        <div className='mobileIcon' onClick={handleMobileActive}>{mobileActive ? '-' : "x"}</div>
        {mobileActive ? <ul></ul> : <ul></ul>}
      </ul>
    </nav>
  );
};
