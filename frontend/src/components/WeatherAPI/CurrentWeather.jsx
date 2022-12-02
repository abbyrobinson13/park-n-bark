
const CurrentWeather = ({ currentWeather }) => {
  let icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
  return (
    <div id="weather-display">
      <div id= "icon"> 
        <img src={icon} alt="icon"/>
          <div id="condition">{currentWeather.weather}  </div> 
       </div>
      <div className="weather-info">  
        Conditions:                 
          <div> {currentWeather.conditions}</div> 
      </div>
      <div className="weather-info">
        <span> Temperature: </span>
        <span> Feels Like: </span>
      </div> 
      <div className="weather-info">
        <span> {currentWeather.temperature}&deg;C </span>
        <span> {currentWeather.feelslike}&deg;C </span>
      </div>
    </div>
  );
};

export default CurrentWeather;