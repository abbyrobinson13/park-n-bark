import { Router } from "express";
import fetch from "node-fetch";

const router = Router()

router.get('/', async(req, res) => {
    let serverReq = await fetch(`http://dog-api.kinduff.com/api/facts`);
    let fact = await serverReq.json();
    console.log("fact sent");
    res.send(fact.facts);
})

export default router
