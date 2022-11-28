import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import parksData from "./calgary-dog-parks.json";
import "./Map.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

function createMarker(park) {
  let myLat = park.geometry.coordinates[1];
  let myLong = park.geometry.coordinates[0];
  

  return (
    <Marker
      key={park.properties.title}
      position={[myLat, myLong]}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [20, 30],
          iconAnchor: [12, 41],
        })
      }
    >
      <Popup>{park.properties.title}</Popup>
    </Marker>
  );
}

function Map() {
  return (
    <MapContainer
      center={[51.0447, -114.0719]}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parksData.map(createMarker)}
    </MapContainer>
  );
}

export { Map, createMarker }
