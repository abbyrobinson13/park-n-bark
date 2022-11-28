import "../../App.css"
import { useEffect as useMyEffect, useState } from "react";
import CurrentForecast from "./CurrentForecast.jsx";

function Forecast() {
  const [currentForecast, setCurrentForecast] = useState({maxtemp:"loading..",mintemp:"loading.."});
  const getCurrentForecast = async () => {
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
    getCurrentForecast()
    return () => console.log("forecast unmounted");
  }, []);

  useMyEffect(() => {
    const id = setInterval(() => {
      getCurrentForecast();
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