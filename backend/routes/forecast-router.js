import { Router } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

const router = Router();
dotenv.config();

const weatherForecastUrl = process.env.WEATHERFORECAST_API_KEY;

const getWeatherForecast = async () => {
  const response = await fetch(weatherForecastUrl);
  const data = await response.json();
  return {
    key: data.list.dt,
    maxtemp: data.list.main.temp_max,
    mintemp: data.list.main.temp_min,
    icon: data.list.weather.icon,
    date: data.list.dt_txt,
  };
};
router.get("/", async (req, res) => {
  try {
    const currentForecast = await getWeatherForecast();
    console.log("Forecast loaded");
    res.send(currentForecast);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

export default router;
