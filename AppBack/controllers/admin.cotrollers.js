import { adminModel } from "../models/admin.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createAdmin = async (request, response) => {
    try {
        let body = request.body

        body.password = bcrypt.hashSync(body.password, parseInt(process.env.MASTER_KEY))

        let newAdmin = await adminModel.create(body)

        const payload = { _id: newAdmin._id }

        let token = await jwt.sign(payload, process.env.JWT_KEY)

        const adminData = {
            token,
            newAdmin
        }
        response.send(adminData)

    } catch (e) {
        console.log(e)
        response.json(e)
    }
}

export const login = async (request, response) => {
    try {
        let body = request.body

        let adminExist = await adminModel.findOne({ email: body.email })

        if (!adminExist) {
            return response.json({ error: "No existe un administrador con este gmail" })
        }

        const validationsPassword = bcrypt.compareSync(body.password, adminExist.password);

        if (validationsPassword) {
            const payload = { _id: adminExist._id }
            const token = jwt.sign(payload, process.env.JWT_KEY)

            const adminData = {
                token,
                userExist
            }
            return response.send(adminData)
        } else {
            return response.send({ error: "Credenciales incorrectas" })
        }

    } catch (e) {
        console.log(e)
        return response.send(e)
    }
}

export const getAdmin = async (request, response) => {

    try {
        let user = await adminModel.find()
        response.json(user)

    } catch (e) {
        console.log(e)
        response.json(e)
    }

}