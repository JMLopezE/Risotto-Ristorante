import express from 'express'
import { createReserve, getReserve, deleteReserve, getReserveByID, putReserve }  from '../controllers/reserve.controllers.js'


const reserveRouter = express.Router()

reserveRouter.get("/", async(req, res) => {
        res.json(await getReserve())
})

reserveRouter.post("/create", async(req, res) => {
        const newReserve = req.body
        res.json(await createReserve(newReserve))        
})

reserveRouter.delete("/:deleteId", async(req, res) =>{
        const { reserveId } = req.params;

        res.json(await deleteReserve(reserveId))
})

reserveRouter.get("/:getId", async(req, res) =>{
        const { reserveId } = req.params;

        res.json(await getReserveByID(reserveId))
})

reserveRouter.put("/:editId", async(req, res) =>{
        const { reserveId } = req.params;

        res.json(await putReserve(reserveId))
})

export default reserveRouter;