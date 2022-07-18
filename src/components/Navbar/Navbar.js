import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import "./Navbar.css";

export const Navbar = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const icon = mobileActive ? <MdClose /> : <FiMenu />;
  const handleMobileActive = () => setMobileActive(!mobileActive);

  const removeMenuMobile = () => setMobileActive(false);

  const toTop = () => {
    scroll.scrollToTop();
    removeMenuMobile();
  };
  return (
    <nav className="navbarWrapper">
      <div className="navbar">
        <div className="logoNavbar">
          <Link onClick={toTop} to="/" className="logo">
            {`<RafalFuz />`}
          </Link>
        </div>
        <div className="linksNavbar">
          <div
            className="linksNavbar__list-mobile"
            onClick={handleMobileActive}
          >
            {icon}
          </div>
          <ul className="linksNavbar__list">
            <Link
              activeClass="active"
              className="linksNavbar__list-link"
              to="aboutSection"
              smooth={true}
              offset={-50}
            >
              O MNIE
            </Link>
            <Link
              activeClass="active"
              className="linksNavbar__list-link"
              to="abillitiesSection"
              smooth={true}
              offset={-50}
            >
              UMIEJĘTNOŚCI
            </Link>
            <Link
              activeClass="active"
              className="linksNavbar__list-link"
              to="credentialsSection"
              smooth={true}
              offset={-50}
            >
              KWALIFIKACJE
            </Link>
            <Link
              activeClass="active"
              className="linksNavbar__list-link"
              to="contactSection"
              smooth={true}
              offset={-50}
            >
              KONTAKT
            </Link>
          </ul>
          <div
            className="mobileMenuWrapper"
            style={{ left: mobileActive ? "0" : "-100%" }}
          >
            <ul className="linksNavbar__list--mobileActive">
              <Link
                activeClass="active"
                className="linksNavbar__list-link--mobileActive"
                to="aboutSection"
                smooth={true}
                offset={-50}
                onClick={removeMenuMobile}
              >
                O MNIE
              </Link>
              <Link
                activeClass="active"
                className="linksNavbar__list-link--mobileActive"
                to="abillitiesSection"
                smooth={true}
                offset={-50}
                onClick={removeMenuMobile}
              >
                UMIEJĘTNOŚCI
              </Link>
              <Link
                activeClass="active"
                className="linksNavbar__list-link--mobileActive"
                to="credentialsSection"
                smooth={true}
                offset={-50}
                onClick={removeMenuMobile}
              >
                KWALIFIKACJE
              </Link>
              <Link
                activeClass="active"
                className="linksNavbar__list-link--mobileActive"
                to="contactSection"
                smooth={true}
                offset={-50}
                onClick={removeMenuMobile}
              >
                KONTAKT
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
