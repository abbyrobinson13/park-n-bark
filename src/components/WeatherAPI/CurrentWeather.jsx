
const CurrentWeather = ({ currentWeather }) => {
  let icon = `http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`
  return (
    <div className="weatherapi">
      <p> <img src={icon} alt="icon"/>{currentWeather.weather} </p>
      <p> Conditions: {currentWeather.conditions} </p>
      <p> Temperature: {currentWeather.temperature}&deg;C </p>
      <p> Feels Like: {currentWeather.feelslike}&deg;C</p>
    </div>
  );
};

export default CurrentWeather;