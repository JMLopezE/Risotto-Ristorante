import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDatabase from "./config/db.js"
import routerReserve from "./routes/reserve.routes.js"

dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT

app.use('/api', routerReserve)

connectDatabase()
app.listen(PORT, () => {
        console.log("El servidor se esta ejecutando " + PORT)
})

export default app;