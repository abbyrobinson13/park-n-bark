import "../../App.css"
import { useEffect as useMyEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState({conditions: "Loading...", temperature: "Loading...", feelslike: "Loading..."});
  const getCurrentWeather = async () => {
    try {
      let response = await fetch("/api/weather");
      let values = await response.json();
      console.log(values);
      setCurrentWeather(values);
    } catch (ex) {
      console.log(ex);
    }
  };
  
  useMyEffect(() => {
    console.log("first weather render");
    getCurrentWeather()
    return () => console.log("weather unmounted");
  }, []);

  useMyEffect(() => {
    const id = setInterval(() => {
      getCurrentWeather();
    }, 900000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="weather">
      {currentWeather && <CurrentWeather currentForecast={currentWeather} />}
    </div>
  );
}

export default Weather;