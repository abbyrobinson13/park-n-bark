import React from "react";
import Weather from "../components/WeatherAPI/Weather";
import { Map } from "../components/ParkMap/Map.jsx";
import DataTable from "../components/DataTable/DataTable.jsx";
// import Forecast from "../components/WeatherAPI/Forecast";

const Parks = () => {
  return (
    <header className="App-header">
      <div id="parks-container">
        <div id="park-display">
          <DataTable />
        </div>
        <div id="map-display">
          <Map />
        </div>
        <Weather />
        {/* <Forecast /> */}
      </div>
    </header>
  );
};

export default Parks;
