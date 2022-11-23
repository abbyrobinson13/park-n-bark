
const CurrentWeather = ({ currentWeather }) => {
  let icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
  return (
    <div id="weather-display">
      <div> <img src={icon} alt="icon"/>{currentWeather.weather} </div>
      <div> Conditions: {currentWeather.conditions} </div>
      <div> Temperature: {currentWeather.temperature}&deg;C </div>
      <div> Feels Like: {currentWeather.feelslike}&deg;C</div>
    </div>
  );
};

export default CurrentWeather;