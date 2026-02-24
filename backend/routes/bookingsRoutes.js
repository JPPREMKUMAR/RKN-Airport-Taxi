


import express from "express"

import authUser from "../middlewares/authUser.js"
import { bookingUser, bookingDetails, bookingsDetailsToMail } from "../controllers/bookingsController.js"

const bookingsRouter = express.Router()



bookingsRouter.post("/booking", bookingUser)
bookingsRouter.post("/bookingDetails/:bookingId", bookingDetails)
bookingsRouter.post("/sendBookingDetails", bookingsDetailsToMail)

export default bookingsRouter