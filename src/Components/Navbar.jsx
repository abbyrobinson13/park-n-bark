import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faDog,
  faLocationPin,
  faHome,
  faCalendar,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="Nav-Container">
      <div id="Nav1">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className="Page-Container">
        <li className="Nav-Page">
          <div className="dropdown">
            <FontAwesomeIcon icon={faHome} />
            <a href="http://localhost:3000">Home</a>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <FontAwesomeIcon icon={faLocationPin} />
            <a href="http://localhost:3000">Parks</a>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <a href="http://localhost:3000">Favorites</a>
              </div>
              <div>
                <a href="http://localhost:3000">Saved</a>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <FontAwesomeIcon icon={faDog} />
            <a href="http://localhost:3000">Pet Pals</a>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <a href="http://localhost:3000">Friends</a>
              </div>
              <div>
                <a href="http://localhost:3000">Feed</a>
              </div>
            </div>
          </div>
        </li>
        <li className="Nav-Page">
          <div className="dropdown">
            <FontAwesomeIcon icon={faCalendar} />
            <a href="http://localhost:3000">Events</a>
            <div className="dropdown-content">
              <div className="first-dropdown">
                <a href="http://localhost:3000">Upcoming Events</a>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <form id="Nav3" action="">
        <input type="search" placeholder="search" />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div id="Nav4">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
};

export default NavBar;
