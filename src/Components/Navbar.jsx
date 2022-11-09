import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser, faDog, faLocationPin, faHome, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return <div className="Nav-Container">
        <div id="Nav1"><FontAwesomeIcon icon={faBars} /></div>
        <ul className="Page-Container">
            <li className="Nav-Page">
                <FontAwesomeIcon icon={faHome} />
                <p>Home</p>
            </li>
            <li className="Nav-Page">
                <FontAwesomeIcon icon={faLocationPin} />
                <p>Parks</p>
            </li>
            <li className="Nav-Page">
                <FontAwesomeIcon icon={faDog} />
                <p>Pet Pals</p>
            </li>
            <li className="Nav-Page">
                <FontAwesomeIcon icon={faCalendar} />
                <p>Events</p>
            </li>
        </ul>
        <form id="Nav3" action="">
            <input type="search" placeholder="search"/>
            <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
        
        <div id="Nav4"><FontAwesomeIcon icon={faUser} /></div>
        
    </div>
}

export default NavBar