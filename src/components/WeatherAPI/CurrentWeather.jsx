
const CurrentWeather = ({ currentWeather }) => {
  let icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
  return (
    <div id="weather-display">
      <div id= "icon"> 
        <img src={icon} alt="icon"/>
          <div id="temp">{currentWeather.weather}  </div> 
       </div>
      <div className="weather-info">  
        Conditions:                 
          <div> {currentWeather.conditions}</div> 
      </div>
      <div className="weather-info">
         Temperature: 
          <div id="temp"> Feels Like: </div> 
      </div> 
      <div className="weather-info">
         {currentWeather.temperature}&deg;C 
          <div id="temp"> {currentWeather.feelslike}&deg;C</div> 
      </div>
    </div>
  );
};

export default CurrentWeather;