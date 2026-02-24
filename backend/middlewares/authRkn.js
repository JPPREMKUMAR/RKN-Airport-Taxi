import jwt from "jsonwebtoken"
import User from "../models/User.js"



const verifyJwtToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}


const authRkn = async (req, res, next) => {

    try {
        const { token } = req.headers
        //console.log(token)
        const payload = verifyJwtToken(token)
        //console.log(payload)
        const { email } = payload




    } catch (e) {

        console.log(e)
        return res.json({ error: e, success: false })
    }
}


export default authRkn