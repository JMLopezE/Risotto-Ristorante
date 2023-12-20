import express from 'express'
import { createReserve, getReserve, deleteReserve }  from '../controllers/reserve.controllers.js'


const router = express.Router()

router.post('/createreserve', createReserve)
router.get('/getreserve', getReserve)
router.delete('/deletereserve', deleteReserve)

export default router