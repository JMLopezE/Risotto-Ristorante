import express from 'express'
import { createAdmin, login, getAdmin } from "../controllers/admin.cotrollers.js"

const router = express.Router()

router.post('/createAdmin', createAdmin)
router.post('/login', login)
router.get('/getAdmin', getAdmin)
export default router