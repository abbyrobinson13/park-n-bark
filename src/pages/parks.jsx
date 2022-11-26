import React from "react";
import Weather from "../components/WeatherAPI/Weather";
import { Map } from "../components/ParkMap/Map.jsx";
import DataTable from "../components/DataTable/DataTable.jsx";

const Parks = () => {
  return (
    <header className="App-header">
      <div id="parks-container">
        <div id="park-display">
          <DataTable />
        </div>
<<<<<<< HEAD
        {/* <div id="search-box">
          <Searchbox />
        </div> */}
=======
>>>>>>> ad571e9bb22c11772b3b8e28782ad8cc9596ded9
        <div id="map-display">
          <Map />
        </div>
        <Weather />
      </div>
    </header>
  );
};

export default Parks;
