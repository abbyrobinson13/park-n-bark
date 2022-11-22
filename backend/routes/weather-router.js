import { Router } from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

const router = Router();
dotenv.config();
const weatherUrl = process.env.WEATHER_API_KEY;

const getWeather = async () => {
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return {
    icon: data.weather[0].icon,
    weather: data.weather[0].main,
    conditions: data.weather[0].description,
    temperature: data.main.temp,
    feelslike: data.main.feels_like,
  };
};

router.get("/", async (req, res) => {
  try {
    const currentWeather = await getWeather();
    console.log("Weather loaded");
    res.send(currentWeather);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

export default router;
