import { Router } from "express";
import { addFavorite, getAllFavorites, removeFavorite } from "../database/models/favoritesModel.js";

const router = Router()

router.get('/:id', async(req, res) => {
    const uid = req.params.id
    try{
    const parks = await getAllFavorites(uid)
    console.log("favorites sent");
    res.send(parks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send();
      }
})

router.post('/', async(req, res) => {
    const { uid, park } = req.body
    try{
        const fav = await addFavorite(uid, park)
        console.log('Favorite added')
        res.send(fav)
    } catch (err) {
        console.error(err.message);
        res.status(500).send({
            message: 'Duplicate entry'
        });
    }
})

router.delete('/', async(req, res) => {
    const park = req.body
    try{
        const removed = await removeFavorite(park._id)
        console.log('Favorite removed')
        res.send(removed)
    } catch (err) {
        console.error(err.message);
        res.status(500).send();
    }
})

export default router