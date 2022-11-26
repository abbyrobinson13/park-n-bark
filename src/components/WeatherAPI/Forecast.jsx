import "../../App.css"
import { useEffect as useMyEffect, useState } from "react";
import CurrentForecast from "./CurrentWeather";

function Forecast() {
  const [currentForecast, setCurrentForecast] = useState({conditions: "Loading...", temperature: "Loading...", feelslike: "Loading..."});
  const Forecast = async () => {
    try {
      let response = await fetch("/api/forecast");
      let values = await response.json();
      console.log(values);
      setCurrentForecast(values);
    } catch (ex) {
      console.log(ex);
    }
  };
  
  useMyEffect(() => {
    console.log("first forecast render");
    Forecast()
    return () => console.log("forecast unmounted");
  }, []);

  useMyEffect(() => {
    const id = setInterval(() => {
      Forecast();
    }, 900000);

    return () => clearInterval(id);
  }, []);
  return (
    <div className="weather">
      {currentForecast && <CurrentForecast currentForecast={currentForecast} />}
    </div>
  );
}

export default Forecast;