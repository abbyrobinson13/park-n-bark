import React from "react";
import Searchbox from "../components/Searchbox";
import Weather from "../components/WeatherAPI/Weather";
import { Map } from "../components/ParkMap/Map.jsx";
import DataTable from "../components/DataTable/DataTable.jsx";

const Parks = () => {
  return (
    <header className="App-header">
      <div id="parks-container">
        <div id="park-display">
          <DataTable className="data-table" />
        </div>
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
