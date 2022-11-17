import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faDog,
  faLocationPin,
  faHome,
  faCalendar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div className="Nav-Container">
      <div id="Nav1">
        <NavLink to="/">
        <img src={logo} alt="logo" className="logo-image" />
        <span>Park n' Bark</span>
        </NavLink>
      </div>
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown push">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
              Home
            </NavLink>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <NavLink to="/parks">
              <FontAwesomeIcon icon={faLocationPin} />
              Parks
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
              Pet Pals
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
              Events
            </NavLink>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <NavLink to="/upcoming-events">Upcoming Events</NavLink>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <form id="Nav3" action="">
        <input type="search" placeholder="Search" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div id="Nav4">
        <NavLink to="/login">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
