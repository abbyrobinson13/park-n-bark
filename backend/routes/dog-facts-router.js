import { Router } from "express";
import fetch from "node-fetch";

const router = Router()

router.get('/', async(req, res) => {
    try{
    let serverReq = await fetch(`http://dog-api.kinduff.com/api/facts`);
    let fact = await serverReq.json();
    console.log("fact sent");
    res.send(fact.facts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send();
      }
})

export default router
