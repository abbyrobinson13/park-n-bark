import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT;

async function main() {
  // await mongoose.connect(process.env.MONGODB_URI, {
  //   dbName: process.env.MONGODB_DBNAME,
  //   user: process.env.MONGODB_USER,
  //   pass: process.env.MONGODB_PASSWORD,
  // });

  // console.log(`Connected to MongoDB database '${process.env.MONGODB_DBNAME}'`);

  app.use(express.json());

  app.listen(port, () => {
    console.log(`Web server running on port ${port}`);
  });
}

app.get("/facts", async (req, res) => {
  let serverReq = await fetch(`http://dog-api.kinduff.com/api/facts`);
  let fact = await serverReq.json();
  console.log("fact sent");
  res.send(fact.facts);
});

const weatherUrl = process.env.WEATHER_API_KEY;

const getWeather = async () => {
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return {
    conditions: data.weather[0].description,
    temperature: data.main.temp,
    feelslike: data.main.feels_like,
  };
};
app.get("/weather", async (req, res) => {
  try {
    const currentWeather = await getWeather();
    res.send(currentWeather);
  } catch (err) {
    console.log(err.message);
    res.status(500).send();
  }
});

try {
  main();
} catch (err) {
  console.error(err);
}
