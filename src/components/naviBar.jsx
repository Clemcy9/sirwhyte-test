import logo from "../images/Frame1.png";
import menuIcon from "../images/Vector.png";
import "./naviBar.css";

function NaviBar() {
  return (
    <div className="naviParent">
      <div className="naviChild1">
        <img src={logo} alt="" />
      </div>
      <a href="#" className="menu">
        <img src={menuIcon} alt="" />
      </a>
      <ul className="naviChild2">
        <li className="contact">
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Team</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
      </ul>
    </div>
  );
}

export default NaviBar;
