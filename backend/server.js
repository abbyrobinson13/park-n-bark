import dotenv from "dotenv";
import express from "express";
import dogFactRouter from './routes/dog-facts-router.js'
import weatherRouter from './routes/weather-router.js'

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

app.use('/api/facts', dogFactRouter)

app.use('/api/weather', weatherRouter)

try {
  main();
} catch (err) {
  console.error(err);
}
