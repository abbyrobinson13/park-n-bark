const CurrentWeather = ({ currentWeather }) => {

  return (
    <div className="weatherapi">
     <p> The current weather is:</p>
      <p> Conditions: {currentWeather.conditions} </p>
      <p> Temperature: {currentWeather.temperature} </p>
      <p> Feels Like: {currentWeather.feelslike}</p>
    </div>
  );
};

export default CurrentWeather;