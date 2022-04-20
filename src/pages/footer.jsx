import fb from "../images/fb.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footParent">
      <div className="container">
        <div className="footHeading row justify-content-between align">
          <h2 className="col-sm-8">Follow @ Fleckr.ng</h2>
          <ul className="d-flex justify-content-between col-md-4 col-sm-4 ">
            <li>
              <a href="#">
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footChidren row d-flex justify-content-between">
          <div className="footChild1">
            <h6>Company Info</h6>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Internship</a>
              </li>
              <li>
                <a href="#teams">Teams</a>
              </li>
            </ul>
          </div>
          <div className="footChild2">
            <h6>Features</h6>
            <ul>
              <li>
                <a href="#">Web/app dev</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Printing</a>
              </li>
              <li>
                <a href="#">Social media</a>
              </li>
            </ul>
          </div>
          <div className="footChild3">
            <ul>
              <li>
                <a href="#">Business dev</a>
              </li>
              <li>
                <a href="#">Digital Marketing</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
            </ul>
          </div>
          <div className="footChild4">
            <h6>Resources</h6>
            <ul>
              <li>
                <a href="#">Download Profile</a>
              </li>
              <li>
                <a href="#">YouTube Lessons</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footChild5">
            <h6>Get in Touch</h6>
            <form action="" className="form-group">
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="First group"
              >
                <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control"
                />
                <button type="submit" className="btn btn-color">
                  Subscribe
                </button>
              </div>
            </form>
            <p>Lets you get access to our premium offers!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
