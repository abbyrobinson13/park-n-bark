import { Router } from "express";
import { getAllParks, getSomeParks } from "../database/models/parkModel.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const allParks = await getAllParks();
    console.log('Parks Sent')
    res.send(allParks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params
  try {
    const parks = await getSomeParks(id)
    console.log('Filtered Parks Sent')
    res.send(parks);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;
