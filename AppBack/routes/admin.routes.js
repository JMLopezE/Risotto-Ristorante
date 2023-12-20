import express from 'express'
import { createUser, getUser, login } from '../controllers/users.controllers.js'

const router = express.Router()

router.post('/createUsers', createUser)
router.post('/login', login)
router.get('/getUsers', getUser)
export default router