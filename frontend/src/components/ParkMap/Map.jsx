import React, {useState, useEffect, } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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
  const [parks, setParks] = useState([])

  useEffect(() => {
    const parksAndReq = async() => {
    const serverReq = await fetch('/api/park')
    const parkData = await serverReq.json()
    setParks(parkData)
    }
    parksAndReq()
  }, [])

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
      {parks.map(createMarker)}
    </MapContainer>
  );
}

export { Map, createMarker }