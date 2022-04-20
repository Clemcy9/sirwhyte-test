import "./rectangle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/Frame1.png";
import menuIcon from "../images/Vector.png";

import { useState } from "react";

function Rectangle() {
  const [menu, setMenu] = useState(false);
  const show = menu ? "show" : " ";

  // side bar
  const [side, setSide] = useState(false);
  const width = side ? 100 : 0;

  return (
    <div className="rectangle">
      <nav className="navbar navbar-expand-lg container">
        <a href="#">
          <img src={logo} alt="" className="img-fluid" />
        </a>
        <button
          onClick={() => setSide(!side)}
          className="navbar-toggler"
          type="button"
        >
          <img src={menuIcon} alt="" />
        </button>

        {/* for side nav */}
        <div id="mySidenav" className="sidenav" style={{ width: width + "%" }}>
          <button className="closebtn btn" onClick={() => setSide(!side)}>
            &times;
          </button>
          <a href="/#about">About</a>
          <a href="/#service">Services</a>
          <a href="/#team">Team</a>
          <a href="/#contact">Contact</a>
        </div>

        <div
          className={"collapse navbar-collapse " + show}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav nav-pills naviChild2">
            <a className="nav-link " href="/#service">
              Service
            </a>
            <a className="nav-link" href="/#about">
              About
            </a>
            <a className="nav-link" href="/#team">
              Team
            </a>
            <a className="nav-link active" id="contact" href="/#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Rectangle;
