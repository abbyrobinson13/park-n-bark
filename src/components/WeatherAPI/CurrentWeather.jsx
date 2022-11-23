
const CurrentWeather = ({ currentWeather }) => {
  let icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
  return (
    <div id="weather-display">
      <div id= "icon"> <img src={icon} alt="icon"/>{currentWeather.weather} </div>
      <div className="weather-info"> Conditions: <div> {currentWeather.conditions}</div> </div>
      <div className="weather-info"> Temperature: <div> {currentWeather.temperature}&deg;C </div> </div>
      <div className="weather-info"> Feels Like: <div> {currentWeather.feelslike}&deg;C</div> </div>
    </div>
  );
};

export default CurrentWeather;