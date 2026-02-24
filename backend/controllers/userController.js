import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import Vehicles from "../models/Vehicles.js"


export const jwtToken = (payload) => {

    return jwt.sign(payload, process.env.JWT_SECRET_KEY)
}


export const registerUser = async (req, res) => {

    try {
        const { name, mobile, email, password } = req.body


        const isUser = await User.findOne({ email: email })

        if (isUser === null) {

            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                name: name,
                email: email,
                password: hashedPassword,
                mobile: mobile
            })
            await newUser.save()

            const payload = {
                email
            }
            const token = jwtToken(payload)


            res.json({ success: true, message: "User Registred Successfully.", token: token })


        } else {
            return (
                res.json({ success: false, message: "Is User is Already Registed." })
            )
        }


    } catch (e) {

        console.log(e)
        return res.json({ error: e, success: false })
    }
}

export const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        const isUser = await User.findOne({ email: email })
        if (isUser === null) {
            return (
                res.json({ success: false, message: "User is Not Registed" })
            )
        } else {
            //console.log(isUser.password)
            const isPassword = await bcrypt.compare(password, isUser.password,)
            // console.log(isPassword)
            if (isPassword === true) {

                const payload = { email }
                const token = jwtToken(payload)
                return res.json({
                    success: true,
                    message: "Login Successful.",
                    token: token
                })

            } else {
                return (
                    res.json({ success: false, message: "Please Enter Valid Password." })
                )
            }
        }

        return res.json({ message: "Login User" })

    } catch (e) {

        console.log(e)
        return res.json({ error: e, success: false })
    }
}


export const userProfile = async (req, res) => {
    try {
        const { email } = req
        //console.log(email)
        const userDetails = await User.findOne({ email: email }, { password: 0 })
        return res.json({
            success: true, userDetails
        })

    } catch (e) {

        //console.log(e)
        return res.json({ error: e, success: false })
    }

}




export const getAllVehiclesUser = async (req, res) => {


    try {


        const getAllVehicles = await Vehicles.find({}).sort({ createdAt: 1 })


        return res.json({
            success: true,
            vehicles: getAllVehicles
        })


    } catch (e) {

        //console.log(e)
        return res.json({ success: false, e })

    }

}




export const getAllVehiclesCategory = async (req, res) => {

    try {
        const { categoryId } = req.params
        const vehicles = await Vehicles.find({ bookingTypeId: categoryId }).sort({ createdAt: 1 })

        return res.json({ success: true, vehicles })


    } catch (e) {
        return res.json({ success: false, e })
    }


}

