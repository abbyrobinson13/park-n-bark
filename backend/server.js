import dotenv from "dotenv";
import express from "express";
import dogFactRouter from "./routes/dog-facts-router.js";
import weatherRouter from "./routes/weather-router.js";
import parkRouter from "./routes/parkRoutes.js";

dotenv.config();
const app = express();
const port = process.env.EXPRESS_PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

app.use("/api/facts", dogFactRouter);

app.use("/api/weather", weatherRouter);

app.use("/api/park", parkRouter);
