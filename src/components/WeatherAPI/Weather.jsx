import "../../App.css"
import { useEffect as useMyEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

function Weather() {
  const [currentWeather, setCurrentWeather] = useState();
  const getCurrentWeather = async () => {
    try {
      let response = await fetch("/weather");
      let values = await response.json();
      console.log(values);
      setCurrentWeather(values);
    } catch (ex) {
      console.log(ex);
    }
  };

  useMyEffect(() => {
    const id = setInterval(() => {
      getCurrentWeather();
    }, 3000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="weather">
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}
    </div>
  );
}

export default Weather;