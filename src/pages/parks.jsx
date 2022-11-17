import React from 'react'
import Weather from '../components/WeatherAPI/Weather'

const Parks = () => {
  return (
    <header className="App-header">
      <div id='parks-container'>
        <div id='park-display'>Parks List</div>
        <div id='search-box'>Search</div>
        <div id='map-display'>Map</div>
        <div id='weather-display'>< Weather /></div>
      </div>
      </header>
  )
}

export default Parks