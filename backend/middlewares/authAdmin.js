
import jwt from "jsonwebtoken"

const getPayload = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)

    return payload
}



const authAdmin = (req, res, next) => {

    try {

        const authHeaders = req.headers["authorization"]
        console.log(authHeaders)
        if (!authHeaders) {
            return res.status(401).json({
                success: false,
                message: "Please Provide JWT"
            })


        }
        const splitAuthHeaders = authHeaders.split(" ")
        const token = splitAuthHeaders[1]

        //console.log(token)
        const payload = getPayload(token)

        // console.log(payload)
        if (payload.adminEmail === process.env.ADMIN_EMAIL && payload.adminPassword === process.env.ADMIN_PASSWORD) {
            next()

        } else {
            return res.status(401).json({
                success: false,
                message: "Invalid Credientials"
            })

        }


    } catch (e) {
        //console.log(e)
        return res.json({ success: false, e })
    }
}



export default authAdmin