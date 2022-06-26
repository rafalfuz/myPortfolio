import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="navbar">
      <h1>RAFAŁ FUZ</h1>
      <ul className={mobile ? "mobileNavbar" : "desktopNavbar"}>
        <Link to="1"></Link>
        <Link to="2"></Link>
        <Link to="3"></Link>
      </ul>
    </div>
  );
};
