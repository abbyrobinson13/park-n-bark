import React from "react";
import Searchbox from "../components/Searchbox";
import Weather from "../components/WeatherAPI/Weather";
import { Map } from "../components/ParkMap/Map.jsx";

const Parks = () => {
  return (
    <header className="App-header">
      <div id="parks-container">
        <div id="park-display">Parks List</div>
        <div id="search-box">
          <Searchbox />
        </div>
        <div id="map-display">
          <Map />
        </div>
        <Weather />
      </div>
    </header>
  );
};

export default Parks;
