import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDog,
  faLocationPin,
  faHome,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";
import Searchbox from "./Searchbox";

const NavBar = () => {
  return (
    <div className="Nav-Container">
      <div id="Nav1">
        <NavLink to="/">
        <img src={logo} alt="logo" className="logo-image" />
        <span className="nav-title">Park n' Bark</span>
        </NavLink>
      </div>
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
            <span> Home </span>  
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/parks">
              <FontAwesomeIcon icon={faLocationPin} />
             <span>Parks</span>
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/favorites">Favorites</NavLink>
              </div>
              <div>
                <NavLink to="/saved">Saved</NavLink>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/pet-pals">
              <FontAwesomeIcon icon={faDog} />
             <span> Pet Pals </span> 
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/friends">Friends</NavLink>
              </div>
              <div>
                <NavLink to="/feed">Feed</NavLink>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/events">
              <FontAwesomeIcon icon={faCalendar} />
             <span> Events</span> 
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/upcoming-events">Upcoming Events</NavLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <Searchbox />
      <div id="Nav4">
        <NavLink to="/login">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
