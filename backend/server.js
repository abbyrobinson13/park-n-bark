import dotenv from "dotenv";
import express from "express";
import dogFactRouter from "./routes/dog-facts-router.js";
import weatherRouter from "./routes/weather-router.js";
import parkRouter from "./routes/parkRoutes.js";
// import forecastRouter from "./routes/forecast-router.js";
import expressOidc from "express-openid-connect";
import eventRouter from "./routes/event-router.js";

const { auth, requiresAuth } = expressOidc;

dotenv.config();
const app = express();
const port = process.env.EXPRESS_PORT;

app.use(express.json());

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.OIDC_BASE_URL,
  clientID: process.env.OIDC_CLIENT_ID,
  issuerBaseURL: process.env.OIDC_ISSUER_BASE_URL,
  routes: {
    login: false,
    callback: "/api/callback",
    logout: "/api/logout",
  },
};
app.use(auth(config));

app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/api/login", (req, res) => res.oidc.login({ returnTo: "/parks" }));

app.get("/api/profile", requiresAuth(), (req, res) => {
  const profile = req.oidc.user;
  res.send(profile);
});

app.use("/api/facts", dogFactRouter);
app.use("/api/weather", weatherRouter);
// app.use("/api/forecast", forecastRouter);
app.use("/api/event/", eventRouter);
app.use("/api/park", parkRouter);
